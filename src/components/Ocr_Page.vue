<template>
  <div class="bg-gray-100 font-sans">
    <!-- Header -->
    <header
      class="bg-red-800 text-white p-4 flex items-center fixed top-0 w-full z-10"
    >
      <h1 class="text-xl font-bold flex items-center space-x-2">
        <span>🤖</span>
        <span>CHATBOT</span>
      </h1>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto pt-20 p-6">
      <h2 class="text-2xl font-bold text-center mb-8">ตัวอย่างการใช้งาน</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="เอกสารใบเสร็จ"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-center text-lg font-semibold">เอกสารใบเสร็จ</h3>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="เอกสารราชการ"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-center text-lg font-semibold">เอกสารราชการ</h3>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="นิทานและนวนิยาย"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-center text-lg font-semibold">นิทานและนวนิยาย</h3>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200"
            alt="ป้ายแนะนำ"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-center text-lg font-semibold">ป้ายแนะนำ</h3>
          </div>
        </div>
      </div>

      <!-- Start Button -->
      <div class="text-center mt-8">
        <button
          class="bg-red-800 text-white px-6 py-2 rounded-full text-lg hover:bg-red-600 focus:outline-none"
        >
          เริ่มต้นใช้งาน
        </button>
      </div>
    </main>
  </div>
</template>
