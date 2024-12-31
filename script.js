window.addEventListener("load", () => {
  const homeContainer = document.getElementById("homeContainer");
  setTimeout(() => {
    homeContainer.classList.add("active");
  }, 100);
});

// ฟังก์ชันสำหรับการเพิ่มจำนวนคลิก
function updateClickCount() {
  // รับค่าจำนวนคลิกจาก localStorage ถ้ามี
  let clickCount = localStorage.getItem('clickCount');
  clickCount = clickCount ? parseInt(clickCount) : 0; // ถ้ายังไม่มีค่า ให้เริ่มต้นที่ 0

  // เพิ่มจำนวนคลิก
  clickCount++;

  // บันทึกจำนวนคลิกลงใน localStorage
  localStorage.setItem('clickCount', clickCount);

  // อัพเดทการแสดงผลในหน้าเว็บ
  document.getElementById('clickCount').textContent = clickCount;
}

// เพิ่ม event listener ให้กับลิงก์
document.getElementById('giftLink').addEventListener('click', function() {
  updateClickCount();
});

// เมื่อโหลดหน้าเว็บ ให้ดึงค่าจำนวนคลิกจาก localStorage มาแสดง
window.onload = function() {
  let clickCount = localStorage.getItem('clickCount');
  clickCount = clickCount ? parseInt(clickCount) : 0;
  document.getElementById('clickCount').textContent = clickCount;
};
