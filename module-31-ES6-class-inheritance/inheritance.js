class TeamMember {
  name;
  address = "BD";

  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class NewSupport extends TeamMember {
  designation = "Support Web Dev";
  groupSupportTime;
  constructor(name, address, time) {
    super(name, address);
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

class StudentCare extends TeamMember {
  designation = "student care Support";
  buildARoutine(student) {
    console.log(this.name, "Build a routine", student);
  }
}
class NeptuneDev extends TeamMember {
  designation = "software engineear";
  codeEditor;
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApp(version) {
    console.log(this.name, "release app version", version);
  }
}

const sakib = new NewSupport("Sakib Khan", "BD", 3.4);
const salman = new NewSupport("Salman Khan", "Dubai", 9.45);
console.log(sakib, salman);

const purnima = new StudentCare("Purnima", "Dhaka");
console.log(purnima);

const alamgir = new NeptuneDev("Alamgir Saheb", "Bogra", "Android Studio");
console.log(alamgir);
alamgir.releaseApp("10.2.0.5");
