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

  <div
    class="bg-gradient-to-t from-orange-100 to-sky-100 min-h-screen flex flex-col"
  >
    <!-- Main Content -->
    <main class="max-w-6xl mx-auto pt- p-6">
      <h2 class="text-2xl font-bold text-center mb-8">ตัวอย่างการใช้งาน</h2>

      <!-- เพิ่มช่องว่างระหว่างการ์ดด้วย gap-12 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        <!-- Card 1 -->
        <div
          class="bg-stone-100 drop-shadow-md hover:drop-shadow-xl rounded-lg overflow-hidden w-64 h-[430px] p-2"
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
          class="bg-stone-100 drop-shadow-md hover:drop-shadow-xl rounded-lg overflow-hidden w-64 h-[430px] p-2"
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
          class="bg-stone-100 drop-shadow-md hover:drop-shadow-xl rounded-lg overflow-hidden w-64 h-[430px] p-2"
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
          class="bg-stone-100 drop-shadow-md hover:drop-shadow-xl rounded-lg overflow-hidden w-64 h-[430px] p-2"
        >
          <div class="pt-">
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
    <div class="text-center mt-8">
      <button
        class="bg-red-800 text-white px-6 py-2 rounded-full text-lg hover:bg-red-600 focus:outline-none"
      >
        เริ่มต้นใช้งาน
      </button>
    </div>
  </div>

</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>
