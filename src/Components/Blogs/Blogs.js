import React from "react";

const Blogs = () => {
  return (
    <section className="mt-5 mb-32 px-4 py-2 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-10 my-10">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
          <div className="shadow-lg shadow-gray-500 rounded-2xl  bg-cyan-100 p-4">
            <h1 className="mb-4 pt-5 text-xl font-serif font-extrabold leading-tight tracking-tight text-center text-[#0a0558] md:text-2xl">
              {`কন্টেক্সট এপিআই এর উদ্দেশ্য কি? (What is the purpose of context
              API?)`}
            </h1>
            <p className="text-md font-serif p-5">
              {`জাভাস্ক্রিপ্ট সাধারণত ট্রি ব্যবহার করে ডাটা পাঠায়। অর্থাৎ প্যারেন্ট থেকে চাইল্ড, চাইল্ড থেকে তার চাইল্ড, তার চাইল্ড থেকে তার চাইল্ডে ডাটা পাঠায়। এক্ষেত্রে আমরা যদি ইমিডিয়েট চাইল্ড কে ডাটা পাঠাই সে ক্ষেত্রে প্রপস ব্যবহার করেই পাঠানো যায় কিন্তু যদি সেই  ডাটা টা কয়েক লেয়ার নিচের কাউকে পাঠাতে হয় সে ক্ষেত্রে মাঝখানের সকল কম্পোনেন্টের মাধ্যমে তার সেই টার্গেটেড চাইল্ড কে ডাটা পাঠাতে হয়। কন্টেক্সট এপিআই সাধারণত এই প্রতিটা লেভেলে প্রপস এর মাধ্যমে ডাটা পাঠানোর কাজটাকে সহজ করে দেয়। এটা মেইন কম্পনেন্ট ডিক্লেয়ার করা থাকে এবং মেইন কম্পোনেন্টের সকল চাইল্ড এই ডাটা ব্যবহার করতে
              পারে কোন প্রপস ব্যবহার না করেই।`}
            </p>
          </div>

          <div className="shadow-lg shadow-gray-500 rounded-2xl  bg-cyan-100 p-4">
            <h1 className="mb-4 pt-5 text-xl font-serif font-extrabold leading-tight tracking-tight text-center text-[#0a0558] md:text-2xl">
              {`সিমেন্টিক ট্যাগ কি? (What is a semantic tag?)`}
            </h1>
            <p className="text-md font-serif p-5">
              {`সিমেন্টিক ট্যাগ সাধারণত html4 এবং html5 এর মধ্যে পার্থক্য। সিমেন্টিক ট্যাগ মিনিংফুল হয়ে থাকে অর্থাৎ কোন কোন কাজে ব্যবহার হচ্ছে সেটা দেখলেই বোঝা যায়। html5 এর আগে সাধারণত সকল কিছুর div মাধ্যমে দেখানো হতো সে ক্ষেত্রে বোঝা যেত না কোনটা হেডার কোনটা ফুটার কোনটা মেন বডি। html5-এ এই সিমেন্টিক ট্যাগ গুলোর মাধ্যমে সহজেই বোঝা যায়। যেমনঃ- <header /> <footer /> <nav /> <main /> <section /> <article /> <aside />`}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full md:w-[600px] mx-auto shadow-lg shadow-gray-500 rounded-2xl  bg-cyan-100 p-4">
            <h1 className="mb-4 pt-5 text-xl font-serif font-extrabold leading-tight tracking-tight text-center text-[#0a0558] md:text-2xl">
              {`ইনলাইন এবং ব্লক এলিমেন্ট (Inline and block elements`}
            </h1>
            <div className="text-md font-serif p-5">
              <h4 className="font-bold">{`ব্লক এলিমেন্ট`} </h4>
              <p>{`
            যে ট্যাগগুলো নতুন লাইন তৈরি করে তাদেরকে ব্লক এলিমেন্ট বলে। অর্থাৎ যে ট্যাগগুলো ব্রাউজারের পুরো প্রস্থ নেয় তাদেরকে ব্লক এলিমেন্ট বলে যেমনঃ-div, p, h1-h6,section…. 
            `}</p>
              <h4 className="pt-3 font-bold">{`ইনলাইন এলিমেন্ট `}</h4>
              <p>{`যে ট্যাগগুলো একই লাইনে থাকে তাদেরকে ইনলাইন এলিমেন্ট বলে। অর্থাৎ যে এলিমেন্ট গুলো নতুন কোন লাইন তৈরি করে না যেই লাইনে দেওয়া হয় সেই লাইনের ভেতরেই বসে যায় তাদেরকে ইনলাইন এলিমেন্ট বলে। যেমনঃ- <span />, <small />, <a href=""></a>`}</p>
              <h4  className="pt-3 font-bold">{`ইনলাইন-ব্লক `}</h4>
              <p>{`দেখতে ব্লক লেভেল এলিমেন্ট হলেও কাজ করে ইনলাইন এলিমেন্ট এর মত। অর্থাৎ ব্লক লেভেল এলিভেন হওয়ার পরেও ব্রাউজার এর পুরো উইথ ব্যবহার করতে পারে না। ইনলাইন এলিমেন্ট এর মত তার যতটুকু জায়গা বরাদ্দ থাকে অতটুকুই নেয়। ইনলাইন এলিমেন্টের নত লাইন এর ভিতরে ঢুকে পরে নতুন লাইন তৈরি করতে পারে না।`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
