<script>
export default {
  name: "ChatPage",
  data() {
    return {
      newMessage: "",
      messages: [
        {
          text: "สวัสดี คุณสามารถอัพโหลดรูปภาพ และสอบถามรายละเอียดเกี่ยวกับรูปได้นะ",
          isUser: false,
        },
      ],
      selectedImage: null,
    };
  },
  mounted() {
    this.selectedImage = this.$route.query.image || null;
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({ text: this.newMessage, isUser: true });
        setTimeout(() => {
          this.messages.push({ text: `คุณพูดว่า: "${this.newMessage}" ฉันจะช่วยคุณได้อย่างไร?`, isUser: false });
        }, 1000);
        this.newMessage = "";
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type === "application/pdf") {
        console.log("Uploaded file:", file.name);
        alert(`อัปโหลดไฟล์สำเร็จ: ${file.name}`);
      }
    },
  },
};
</script>

<template>
  <header class="bg-red-800 text-white p-4 flex items-center fixed top-0 w-full z-10">
    <h1 class="text-xl font-bold flex items-center space-x-2">
      <span>🤖</span>
      <span>CHATBOT</span>
    </h1>
  </header>
  <div class="font-sans bg-gradient-to-t from-orange-100 to-sky-100 h-screen flex">
    <!-- Sidebar for file upload -->
    <div class="w-1/3 border-red-400 flex flex-col p-3">
      <div class="text-center">
        <label for="file-upload" class="border border-dashed border-gray-400 rounded-lg flex flex-col min-w-screen min-h-screen items-center justify-center">
          <div v-if="selectedImage" class="w-full h-auto">
            <img :src="selectedImage" alt="Selected Image" class="styled-image" />
          </div>
          <div v-else class="text-gray-500 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16l4 4m0 0l4-4m-4 4V4"/>
            </svg>
            <p class="text-gray-500 mt-3">คลิกเพื่อเลือกไฟล์จากคอมพิวเตอร์</p>
          </div>
          <input id="file-upload" type="file" class="hidden" @change="handleFileUpload" accept="application/pdf"/>
        </label>
      </div>
    </div>
    <!-- Chat Section -->
    <div class="backdrop-contrast-100 bg-white/50 w-2/3 flex flex-col">
      <div class="flex-1 overflow-y-auto pt-6 p-12 space-y-4">
        <div v-for="(message, index) in messages" :key="index" :class="message.isUser ? 'flex justify-end' : 'flex justify-start'">
          <div :class="message.isUser ? 'bg-red-200 text-red-800' : 'bg-gray-200 text-gray-800'" class="p-3 rounded-lg inline-block max-w-xl">
            {{ message.text }}
          </div>
        </div>
      </div>
      <!-- Input Section -->
      <div class="p-20 flex items-center justify-center">
        <div class="flex items-center space-x-2 w-full">
          <input v-model="newMessage" type="text" placeholder="พิมพ์ข้อความ" class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-red-300" @keyup.enter="sendMessage"/>
          <button @click="sendMessage" class="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-600">
            ส่ง
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
@media (max-width: 768px) {
  .styled-image {
    max-width: 90%;
    margin: 20px auto;
  }
}
.styled-image {
  max-width: 90%;
  height: auto;
  padding: 10px;
  display: block;
  margin: 10px auto;
  border-radius: 10px;
  object-fit: cover;
}
</style>
