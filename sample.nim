# A small command-line tool, realistic Nim.
import std/strutils

type
  Greeter = object
    name: string

proc newGreeter(name: string): Greeter =
  result = Greeter(name: name)

proc greet(g: Greeter): string =
  result = "Hello, " & g.name

proc main() =
  let g = newGreeter("World")
  echo greet(g)

main()
