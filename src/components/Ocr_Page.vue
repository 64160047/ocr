<template>
  <!-- Header -->
  <header
    class="bg-red-800 text-white p-4 flex items-center fixed top-0 w-full z-10"
  >
    <h1 class="text-xl font-bold flex items-center space-x-2">
      <span>🤖</span>
      <span>CHATBOT</span>
    </h1>
  </header>

  <!-- Main Content with Scrollable Background -->
  <div class="h-screen w-full relative overflow-auto">
    <!-- Background Animation -->
    <div class="absolute inset-0 animate-gradient"></div>

    <!-- Main Content -->
    <main class="max-w-full mx-auto pt-10 p-10 relative z-10">
      <h2 class="text-2xl font-bold text-center mb-8 text-gray-900">
        ตัวอย่างการใช้งาน
      </h2>

      <!-- Card Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        <!-- Card 1 -->
        <div
          class="bg-stone-100 drop-shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-100 hover:drop-shadow-xl rounded-lg overflow-hidden w-[280px] h-[430px] p-4"
        >
          <div class="pt-3">
            <h3 class="text-center text-md font-semibold">เอกสารใบเสร็จ</h3>
          </div>
          <img
            src="@/assets/SaleOder.png"
            alt="เอกสารใบเสร็จ"
            class="w-full h-[350px] object-contain rounded-md"
          />
        </div>

        <!-- Card 2 -->
        <div
          class="bg-stone-100 drop-shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-100 hover:drop-shadow-xl rounded-lg overflow-hidden w-[280px] h-[430px] p-4"
        >
          <div class="pt-3">
            <h3 class="text-center text-md font-semibold">เอกสารราชการ</h3>
          </div>
          <img
            src="@/assets/เอกสารราชการ.jpg"
            alt="เอกสารราชการ"
            class="w-full h-[350px] object-contain rounded-md"
          />
        </div>

        <!-- Card 3 -->
        <div
          class="bg-stone-100 drop-shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-100 hover:drop-shadow-xl rounded-lg overflow-hidden w-[280px] h-[430px] p-4"
        >
          <div class="pt-3">
            <h3 class="text-center text-md font-semibold">นิทานและนวนิยาย</h3>
          </div>
          <img
            src="@/assets/นวนิยาย.gif"
            alt="นิทานและนวนิยาย"
            class="w-full h-[350px] object-contain rounded-md"
          />
        </div>

        <!-- Card 4 -->
        <div
          class="bg-stone-100 drop-shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-100 hover:drop-shadow-xl rounded-lg overflow-hidden w-[280px] h-[430px] p-4"
        >
          <div class="pt-3">
            <h3 class="text-center text-md font-semibold">ป้ายแนะนำ</h3>
          </div>
          <img
            src="@/assets/ป้าย.jpg"
            alt="ป้ายแนะนำ"
            class="w-full h-[350px] object-contain rounded-md"
          />
        </div>
      </div>
    </main>

    <!-- Start Button -->
    <div class="relative z-10 text-center mt-8">
      <button
        class="bg-red-800 text-white px-6 py-2 rounded-full text-lg hover:bg-red-600 focus:outline-none"
         @click="goToChatPage"
        >
        เริ่มต้นใช้งาน
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToChatPage() {
      this.$router.push('/Chat_Page'); // ใช้ Vue Router ในการเปลี่ยนหน้า
    },
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

/* Background Gradient Animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background: linear-gradient(
    270deg,
    #EFD8E7,
    #F3E6DD,
    #C1DFF9
  );
  background-size: 400% 1000%;
  animation: gradient 10s ease infinite;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
}
</style>
