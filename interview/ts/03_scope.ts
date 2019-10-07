function funcA(a: number) {

  function funcB() {
    const b = 2;

    function funcC() {
      const c = 3;

      console.log("funcC: ", a, b, c);
    }

    funcC();
    console.log("funcB: ", a, b);
  }

  funcB();
  console.log("funcA:", a);
}

funcA(1);
