// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।

const [a, b, c, d, rest] = [2, 3, 4, 5, 6, 7, 7, 8, 34, 67, 5, 868, 23];

const three = c;
console.log(three);
