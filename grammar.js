module.exports = grammar({
  name: 'nim',
  rules: {
    source_file: $ => repeat(choice(
      $.proc_declaration,
      $.func_declaration,
      $._statement
    )),
    proc_declaration: $ => seq(
      'proc', field('name', $.identifier), optional(field('parameters', $.parameters)), optional(seq(':', field('return_type', $.type))), '=', field('body', $.body)
    ),
    func_declaration: $ => seq(
      'func', field('name', $.identifier), optional(field('parameters', $.parameters)), optional(seq(':', field('return_type', $.type))), '=', field('body', $.body)
    ),
    parameters: $ => seq('(', repeat(choice(/[^()]+/, $.parameters)), ')'),
    type: $ => /[a-zA-Z0-9_]+/,
    identifier: $ => /[a-zA-Z0-9_]+/,
    body: $ => prec.right(repeat1($._statement)),
    _statement: $ => choice(
      /[a-zA-Z0-9_]+/,
      /[^a-zA-Z0-9_\s]+/
    )
  }
});
