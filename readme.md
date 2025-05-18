# What are some differences between interfaces and types in TypeScript?

ইন্টারফেস (Interface):

শুধুমাত্র অবজেক্টের স্ট্রাকচার বর্ণনা করতে ব্যবহার করা যায়

এক্সটেন্ড করা যায় (extends keyword ব্যবহার করে)

ডিক্লেয়ারেশন মার্জিং (একই নামে একাধিক ডিক্লেয়ারেশন একসাথে merge হয়)

টাইপ (Type):

যেকোনো টাইপের আলিয়াস তৈরি করতে পারে (প্রিমিটিভ, ইউনিয়ন, ইন্টারসেকশন ইত্যাদি)

কম্পিউটেড প্রোপার্টি ব্যবহার করা যায়

টুপল টাইপ ডিফাইন করতে পারে

# What is the use of the keyof keyword in TypeScript? Provide an example.

keyof কীওয়ার্ড একটি অবজেক্ট টাইপের কীগুলোর ইউনিয়ন টাইপ তৈরি করে।

interface Person {
name: string;
age: number;
address: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "address"
