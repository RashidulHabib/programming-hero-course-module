const anthem = "Amar Sonar Bangla Ami Tomai Valobashi";
const words = anthem.split(" ");

const withoutA = anthem.split("a");
// console.log(words);

// NOTE: without ("a") => (what is passing in argument) all will print. and
// will be split whare "a" is....
// console.log(withoutA);

// NOTE: চাইলে index ধরে string কে কাটা যায়। Slice  ব্যাবহার করে।
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// NOTE:চাইলে ১টা ইনডেক্স থেকে শুরু করে আমরা কতগুলা অক্ষর/সংখ্যা চাই, সেটা করা যাবে substr দিয়ে।
// এখানে ১১ নাম্বার ইনডেক্স থেকে শুরু হবে। ১১নাম্বার ইন্ডেক্স থেকে শুরু করে ৮টা অক্ষর/যা থাকুক; সেটা পর্যন্ত প্রিন্ট করবে।
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// NOTE: এটা slice এর মতই কাজ করে। ১১ নাম্বার ইন্ডেক্স থেকে শুরু হবে। ১৫ এর আগে মানে ১৪ নাম্বার ইন্ডেক্স পর্যন্ত যাবে।
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

//NOTE:concat করে string কে জোড়া-তালি দেয়া যায়।
const first = "Amader";
const second = "City";
// const fullString = first + second;
const fullString = first
  .concat(" ")
  .concat(second)
  .concat(" = ")
  .concat("Bogra");
// console.log(fullString);

// aga
const words2 = ["a", "b", "c", "d", "1"];
// const alljoin = words2.join("");
// const alljoin = words2.join(" ");
// const alljoin = words2.join(",");
const alljoin = words2.join(" & ");
console.log(alljoin);
