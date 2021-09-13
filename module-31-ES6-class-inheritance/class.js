class NewSupport {
  name;
  designation = "Support Web Dev";
  address = "BD";
  //   NOTE: class এ কিছু নিয়ে সেটা নতুন অবজেক্ট এ দিতে হবে constructor function লিখতে হবে। যেইটাকে নতুন অবজেক্ট এ পাল্টাবে, সেটাকে constructor এ ধরতে হবে this.name; এভাবে।
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

const amir = new NewSupport("Amir Khan", "BD");
const salman = new NewSupport("Salman Khan", "Dubai");
console.log(amir, salman);
amir.startSession();
salman.startSession();
