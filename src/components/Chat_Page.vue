<template>
<header class="bg-red-800 text-white p-4 flex items-center fixed top-0 w-full z-10">
          <h1 class="text-xl font-bold flex items-center space-x-2">
            <span>🤖</span>
            <span>CHATBOT</span>
          </h1>
        </header>
    <div class="font-sans bg-gradient-to-t from-orange-100 to-sky-100 h-screen flex">
        <!-- Chat Header -->
        
      <!-- Sidebar for file upload -->
      <div class="w-1/3 border-r border-dashed border-red-400 flex flex-col items-center justify-center">
        <div class="text-center">
          <div class="border border-dashed border-gray-400 rounded-lg flex flex-col min-w-screen min-h-screen items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mx-auto text-gray-400"
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
            <p class="text-gray-500 mt-4">อัปโหลดไฟล์ของคุณโดยการลากมาวางหรือคลิกที่นี่</p>
          </div>
        </div>
      </div>
  
      <!-- Chat Section -->
      <div class="w-1/2 flex flex-col">
        
  
        <!-- Chat Content -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
          <!-- Chat Bubble -->
          <div class="bg-red-200 p-4 rounded-lg text-red-800 self-end w-3/4">
            ข้อความจากผู้ใช้งาน
          </div>
          <div class="bg-gray-200 p-4 rounded-lg text-gray-800 w-3/4">
            ข้อความจากแชตบอท
          </div>
        </div>
  
        <!-- Input Section -->
        <div class="p-4 border-t">
          <div class="flex items-center space-x-4">
            <input
              type="text"
              placeholder="พิมพ์ข้อความ"
              class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-red-300"
            />
            <button class="bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-600">
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
};
</script>