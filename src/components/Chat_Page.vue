<template>
  <header
    class="bg-red-800 text-white p-4 flex items-center fixed top-0 w-full z-10"
  >
    <h1 class="text-xl font-bold flex items-center space-x-2">
      <span>🤖</span>
      <span>CHATBOT</span>
    </h1>
  </header>
  <div
    class="font-sans bg-gradient-to-t from-orange-100 to-sky-100 h-screen flex"
  >
    <!-- Chat Header -->

    <!-- Sidebar for file upload -->
    <div class="w-1/3 border-red-400 flex flex-col p-3">
      <div class="text-center">
        <div
          class="border border-dashed border-gray-400 rounded-lg flex flex-col min-w-screen min-h-screen items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto text-gray-400 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 16l4 4m0 0l4-4m-4 4V4"
            />
          </svg>
          <p class="text-gray-500 mt-3 mb-12">
            อัปโหลดไฟล์ของคุณโดยการลากมาวางหรือคลิกที่นี่
          </p>
        </div>
      </div>
    </div>

    <!-- Chat Section -->
    <div class="w-2/3 flex flex-col">
      <div class="flex-1 overflow-y-auto pt-6  p-12 space-y-4">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="message.isUser ? 'flex justify-end' : 'flex justify-start'"
        >
          <div
            :class="
              message.isUser
                ? 'bg-red-200 text-red-800'
                : 'bg-gray-200 text-gray-800'
            "
            class="p-3 rounded-lg inline-block max-w-xl"
          >
            {{ message.text }}
          </div>
        </div>
      </div>

      <!-- Input Section -->
      <div class="p-20 border-t items-center justify-center">
        <div class="flex items-center space-x-2">
          <input
            type="text"
            placeholder="พิมพ์ข้อความ"
            class="flex-1 border border-gray-300 rounded-lg px-12 py-3 focus:outline-none focus:ring focus:ring-red-300"
          />
          <button
            class="bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-600"
          >
            ส่ง
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPage",
  data() {
    return {
      messages: [
        { text: "สวัสดีครับ", isUser: true },
        { text: "สวัสดี คุณสามารถอัพโหลดรูปภาพ และสอบถามรายละเอียดเกี่ยวกับรูปได้นะ", isUser: false },
      ],
    };
  },
};
</script>