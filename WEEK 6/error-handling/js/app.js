// some dogy code
try {
  //   const url = "someurl.com";
  //   //   url = "";

  //   let array = [3, 5];
  //   console.log(array[3]);

  //   let date = new Date("foo-bar 2014");
  //   new Date("2014-25-23".toISOString());
  //   console.log("finished no errors");

  const input = "Julie Bertine Øyen";

  if (input.length > 10) {
    throw new Error("too long"); // console = something went wrong
  }
  console.log("not reached");
} catch (error) {
  console.log("Something went wrong");
} finally {
  console.log("Some important code that MUST run regardless");
}
