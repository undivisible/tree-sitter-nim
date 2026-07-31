proc hello(name: string): int =
  echo "Hello ", name
  return 42

func add(a, b: int): int =
  result = a + b
