/* Data kursus 0113382 Seminar Bahasa Melayu.
   Untuk mengemas kini laman, ubah data dalam fail ini sahaja.
   ถ้าต้องการแก้ไขเนื้อหาเว็บ ให้แก้ข้อมูลในไฟล์นี้ */

window.KURSUS = {
  kod: "0113382",
  namaMs: "Seminar Bahasa Melayu",
  namaTh: "สัมมนาภาษามลายู",
  semester: "Semester 2/2569",
  semesterTh: "ภาคเรียนที่ 2/2569",

  pensyarah: [
    { nama: "Asst. Prof. Muhammad Salaebing", namaTh: "ผศ.มูหำหมัด สาแลบิง", emel: "smuhammad@tsu.ac.th" },
    { nama: "Samsiyah Malaheng", namaTh: "อ.ซัมซียะห์ มะลาเฮง", emel: "Msamsiyah@yahoo.com" }
  ],

  /* Halaman laman — susunan ini menentukan butang "sebelum / seterusnya" */
  halaman: [
    { fail: "index.html", ms: "Laman Utama", th: "หน้าแรก" },
    { fail: "perjalanan.html", ms: "Perjalanan 15 Minggu", th: "เส้นทาง 15 สัปดาห์" },
    { fail: "kit.html", ms: "Kit Seminar", th: "ชุดเครื่องมือจัดสัมมนา" },
    { fail: "rubrik.html", ms: "Rubrik", th: "เกณฑ์ประเมิน" },
    { fail: "galeri.html", ms: "Galeri Karya", th: "คลังผลงาน" },
    { fail: "dokumen.html", ms: "Dokumen", th: "เอกสาร 15 บท" }
  ],

  /* Pautan dokumen bab (Google Drive). Fail mesti dikongsi
     "Sesiapa yang mempunyai pautan boleh melihat" supaya pelajar dapat membukanya.
     ไฟล์ต้องตั้งค่าแชร์ "ทุกคนที่มีลิงก์ดูได้" นิสิตจึงจะเปิดได้ */
  bab: [
    { no: 1,  id: "1GMvWNrF6GaiMP8Vm6y950pN6sw9H29oj", ms: "Pengenalan Kursus dan Konsep Seminar", th: "ปฐมนิเทศรายวิชาและแนวคิดการสัมมนา" },
    { no: 2,  id: "1m4xq7d1V_v4W0Y7R1nYacFTr5dAuD87g", ms: "Prinsip dan Konsep Pengendalian Seminar", th: "หลักการและแนวคิดการจัดสัมมนา" },
    { no: 3,  id: "1TwKnorETJ--zooMdSX4Hi4h1CDDJDo1z", ms: "Jenis, Bentuk dan Proses Seminar", th: "ประเภท รูปแบบ และกระบวนการสัมมนา" },
    { no: 4,  id: "1PrwdQLlTmnbAz20OTLPrPQIFgVSs3por", ms: "Menganalisis Isu dan Menentukan Topik", th: "การวิเคราะห์ประเด็นและการกำหนดหัวข้อ" },
    { no: 5,  id: "1bCZHyEXt8mIlgr3JK7VIgGr3xxv4Vs-B", ms: "Mencari Maklumat dan Membaca Kritis", th: "การค้นคว้าข้อมูลและการอ่านอย่างมีวิจารณญาณ" },
    { no: 6,  id: "13pdGgQDulhHBtIrXd9kJNLgnJgnTme7z", ms: "Menulis Laporan Akademik dan APA", th: "การเขียนรายงานวิชาการและการอ้างอิง APA" },
    { no: 7,  id: "18KZhdcmdE2woWB-9WECM_XrrLJ8Vve5C", ms: "Menyediakan Bahan Sokongan Seminar", th: "การจัดทำสื่อและเอกสารประกอบการสัมมนา" },
    { no: 8,  id: "1JFU2WiOzj47zVjY90bYm6LXBLukTvD0k", ms: "Komunikasi dan Pembentangan Profesional", th: "การสื่อสารและการนำเสนออย่างมืออาชีพ" },
    { no: 9,  id: "1XZOxF9ogKTnRzWzqhQSPAbM2BD-pej8U", ms: "Pengurusan Seminar dan Peranan Jawatankuasa", th: "การบริหารจัดการงานสัมมนาและบทบาททีมงาน" },
    { no: 10, id: "1Q4uXR49_xQdHNNXI3CIQOHnaYp9HfpYs", ms: "Mini Seminar Pusingan 1", th: "สัมมนาในชั้นเรียน รอบที่ 1" },
    { no: 11, id: "1kpY-qedANREkTLvM6w2xkh-DBVTQqWAn", ms: "Mini Seminar Pusingan 2", th: "สัมมนาในชั้นเรียน รอบที่ 2" },
    { no: 12, id: "18AjuUAJXL2ktND0iYyOIqQnmZ0Ncc-6U", ms: "Analisis dan Refleksi Pasca Seminar", th: "การวิเคราะห์และสะท้อนคิดหลังสัมมนา" },
    { no: 13, id: "1Ro_WpjxYJeF_GFAPnrgMK1xS5vy4uYoj", ms: "Menulis Laporan Akhir Seminar", th: "การเขียนรายงานสรุปผลสัมมนาฉบับสมบูรณ์" },
    { no: 14, id: "1bLKHOOdhboiB8ScYbYeJgXzkK4xfohwP", ms: "Penilaian Kendiri dan Pembangunan Diri", th: "การประเมินและพัฒนาตนเอง" },
    { no: 15, id: "17i43ymJE09wM_24n_lYV_ZmUMmjvGf_s", ms: "Academic Showcase dan Rumusan Kursus", th: "Academic Showcase และสรุปรายวิชา" }
  ],

  /* Perjalanan 15 minggu. fasa: 1 Asas, 2 Kajian, 3 Persediaan, 4 Seminar, 5 Refleksi, 6 Showcase */
  minggu: [
    { no: 1, fasa: 1, clo: "CLO1",
      ms: "Mengenal kursus dan maksud seminar", th: "ปฐมนิเทศ ชี้แจง TSU03 CLOs เกณฑ์ประเมิน และความหมายของการสัมมนา",
      tugasan: [
        { ms: "Baca rincian kursus, CLO dan pecahan markah", th: "อ่านรายละเอียดรายวิชา CLOs และสัดส่วนคะแนน" },
        { ms: "Kongsi pengalaman menghadiri seminar dalam kumpulan", th: "แลกเปลี่ยนประสบการณ์การเข้าร่วมสัมมนาในกลุ่ม" },
        { ms: "Senaraikan tiga bidang minat awal (Lembaran Kerja 1)", th: "ระบุความสนใจเบื้องต้น 3 ด้าน (ใบงานที่ 1)" }
      ] },
    { no: 2, fasa: 1, clo: "CLO1",
      ms: "Prinsip seminar yang berjaya", th: "หลักการและแนวคิดการจัดสัมมนา องค์ประกอบของสัมมนาที่ประสบความสำเร็จ",
      tugasan: [
        { ms: "Tonton dan analisis rakaman seminar bahasa Melayu", th: "ดูและวิเคราะห์วิดีทัศน์ตัวอย่างสัมมนาภาษามลายู" },
        { ms: "Kenal pasti unsur seminar yang berjaya", th: "ระบุองค์ประกอบของสัมมนาที่ประสบความสำเร็จ" },
        { ms: "Lengkapkan Lembaran Kerja 2", th: "ทำใบงานที่ 2" }
      ] },
    { no: 3, fasa: 1, clo: "CLO1",
      ms: "Jenis, bentuk dan proses seminar", th: "ประเภท รูปแบบ และกระบวนการดำเนินการสัมมนา",
      tugasan: [
        { ms: "Bezakan seminar, bengkel, forum dan persidangan", th: "แยกแยะสัมมนา ประชุมเชิงปฏิบัติการ อภิปรายเป็นคณะ และประชุมวิชาการ" },
        { ms: "Reka rangka seminar bersama kumpulan", th: "ออกแบบโครงร่างสัมมนากับกลุ่ม" }
      ],
      hasil: { ms: "Rangka seminar kumpulan", th: "โครงร่างสัมมนากลุ่ม" } },
    { no: 4, fasa: 2, clo: "CLO2",
      ms: "Daripada minat kepada topik", th: "การวิเคราะห์ประเด็นและการกำหนดหัวข้อ แปลงความสนใจเป็นคำถามการศึกษา",
      tugasan: [
        { ms: "Sempitkan minat dengan model corong", th: "จำกัดความสนใจด้วยแบบจำลองกรวย" },
        { ms: "Semak topik dengan kriteria FINER", th: "ตรวจหัวข้อด้วยเกณฑ์ FINER" },
        { ms: "Tulis 2–3 soalan dan objektif kajian", th: "เขียนคำถามและวัตถุประสงค์การศึกษา 2–3 ข้อ" },
        { ms: "Isi Borang Cadangan Topik dan hadiri konsultasi 10 minit", th: "กรอกแบบเสนอหัวข้อ และเข้ารับคำปรึกษา 10 นาที" }
      ],
      hasil: { ms: "Borang Cadangan Topik (formatif)", th: "แบบเสนอหัวข้อ (ประเมินเพื่อพัฒนา)" } },
    { no: 5, fasa: 2, clo: "CLO2",
      ms: "Mencari sumber dan membaca kritis", th: "การค้นคว้าข้อมูลเชิงวิชาการ ฐานข้อมูลภาษามลายู และการอ่านอย่างมีวิจารณญาณ",
      tugasan: [
        { ms: "Cari sumber di Perpustakaan TSU, ThaiJO, Google Scholar dan MyCite", th: "สืบค้นจากห้องสมุด TSU, ThaiJO, Google Scholar และ MyCite" },
        { ms: "Nilai setiap sumber dengan ujian CRAAP", th: "ประเมินแหล่งข้อมูลด้วยเกณฑ์ CRAAP" },
        { ms: "Catat sumber dalam matriks sorotan literatur", th: "บันทึกในตารางทบทวนวรรณกรรม" }
      ] },
    { no: 6, fasa: 2, clo: "CLO1, CLO2",
      ms: "Menulis laporan topik dan APA", th: "เทคนิคการเขียนรายงานวิชาการภาษามลายูและการอ้างอิงแบบ APA",
      tugasan: [
        { ms: "Tulis pengenalan, objektif dan tinjauan literatur awal", th: "เขียนบทนำ วัตถุประสงค์ และการทบทวนวรรณกรรมเบื้องต้น" },
        { ms: "Semak sitasi dan senarai rujukan APA edisi ketujuh", th: "ตรวจการอ้างอิงในเนื้อความและรายการอ้างอิง APA ฉบับที่ 7" },
        { ms: "Tukar draf dengan rakan untuk semakan", th: "แลกร่างกับเพื่อนเพื่อตรวจทาน" },
        { ms: "Hantar fail NoMatrik-LaporanTopik ke folder kursus", th: "ส่งไฟล์ NoMatrik-LaporanTopik ในโฟลเดอร์รายวิชา" }
      ],
      hasil: { ms: "Laporan topik seminar", th: "รายงานหัวข้อสัมมนา" }, markah: "20%" },
    { no: 7, fasa: 3, clo: "CLO3",
      ms: "Slaid, poster dan bahan edaran", th: "การจัดทำสื่อและเอกสารประกอบการสัมมนาด้วยภาษามลายูที่ถูกต้อง",
      tugasan: [
        { ms: "Sediakan papan cerita pembentangan", th: "ทำโครงเรื่องการนำเสนอ" },
        { ms: "Bina draf slaid (10–14 slaid) dengan PowerPoint atau Canva", th: "ร่างสไลด์ 10–14 สไลด์ ด้วย PowerPoint หรือ Canva" },
        { ms: "Reka poster akademik dan bahan edaran satu halaman", th: "ออกแบบโปสเตอร์วิชาการและเอกสารแจก 1 หน้า" }
      ],
      hasil: { ms: "Draf slaid dan poster", th: "ร่างสไลด์และโปสเตอร์" } },
    { no: 8, fasa: 3, clo: "CLO3",
      ms: "Latihan pembentangan", th: "การสื่อสารและการนำเสนออย่างมืออาชีพ ฝึกนำเสนอ (Mock Presentation)",
      tugasan: [
        { ms: "Hafal ayat pembukaan dan penutup", th: "จำประโยคเปิดและปิดให้ได้" },
        { ms: "Latihan membentang 10 minit + 5 minit soal jawab", th: "ฝึกนำเสนอ 10 นาที + ถาม-ตอบ 5 นาที" },
        { ms: "Beri maklum balas \"Dua Bintang, Satu Hasrat\" kepada rakan", th: "ให้ข้อมูลป้อนกลับแบบ \"สองดาว หนึ่งความหวัง\" แก่เพื่อน" },
        { ms: "Tulis tiga perkara untuk dibaiki sebelum Minggu 10", th: "เขียน 3 สิ่งที่จะปรับก่อนสัปดาห์ที่ 10" }
      ] },
    { no: 9, fasa: 3, clo: "CLO1",
      ms: "Menubuhkan jawatankuasa seminar", th: "การบริหารจัดการงานสัมมนา บทบาททีมงาน กำหนดการ และสคริปต์พิธีกร",
      tugasan: [
        { ms: "Tubuhkan jawatankuasa dan agihkan peranan", th: "ตั้งคณะทำงานและแบ่งบทบาท" },
        { ms: "Tulis kertas cadangan ringkas dan atur cara", th: "เขียนข้อเสนอโครงการย่อและกำหนดการ" },
        { ms: "Tulis skrip pengacara majlis atau pengerusi sesi", th: "เขียนสคริปต์พิธีกรหรือประธานช่วง" },
        { ms: "Sediakan pelan kontingensi kumpulan", th: "จัดทำแผนสำรองของกลุ่ม" }
      ],
      hasil: { ms: "Kertas cadangan, atur cara, senarai jawatankuasa", th: "ข้อเสนอโครงการ กำหนดการ รายชื่อคณะทำงาน" } },
    { no: 10, fasa: 4, clo: "CLO1, CLO3",
      ms: "Mini Seminar pusingan 1", th: "การดำเนินงานสัมมนา รอบที่ 1: นำเสนอ อภิปราย และตอบคำถามเป็นภาษามลายู",
      tugasan: [
        { ms: "Kumpulan A membentang; Kumpulan B menjadi jawatankuasa", th: "กลุ่ม A นำเสนอ กลุ่ม B เป็นคณะทำงาน" },
        { ms: "Hantar slaid akhir kepada urus setia teknikal H-2", th: "ส่งสไลด์ฉบับสุดท้ายให้ฝ่ายเทคนิคล่วงหน้า 2 วัน" },
        { ms: "Pengulas menerima laporan pemakalah H-3", th: "ผู้วิพากษ์ได้รับรายงานล่วงหน้า 3 วัน" }
      ],
      hasil: { ms: "Pembentangan dan peranan", th: "การนำเสนอและการปฏิบัติหน้าที่" }, markah: "40%" },
    { no: 11, fasa: 4, clo: "CLO1, CLO3",
      ms: "Mini Seminar pusingan 2", th: "การดำเนินงานสัมมนา รอบที่ 2: นำเสนอ อภิปราย และตอบคำถามเป็นภาษามลายู",
      tugasan: [
        { ms: "Kumpulan B membentang; Kumpulan A menjadi jawatankuasa", th: "กลุ่ม B นำเสนอ กลุ่ม A เป็นคณะทำงาน" },
        { ms: "Setiap pelajar sekurang-kurangnya sekali menjadi pemakalah dan sekali memegang peranan utama", th: "ทุกคนเป็นผู้นำเสนออย่างน้อย 1 ครั้ง และรับบทบาทหลักอย่างน้อย 1 ครั้ง" }
      ],
      hasil: { ms: "Pembentangan dan peranan", th: "การนำเสนอและการปฏิบัติหน้าที่" }, markah: "40%" },
    { no: 12, fasa: 5, clo: "CLO3",
      ms: "Refleksi selepas seminar", th: "การวิเคราะห์ผลและการอภิปรายหลังสัมมนา จุดแข็ง สิ่งที่ควรปรับปรุง และบทเรียน",
      tugasan: [
        { ms: "Tonton rakaman seminar anda", th: "ดูวิดีทัศน์บันทึกการสัมมนาของตนเอง" },
        { ms: "Rumuskan ulasan pengulas dan soalan hadirin", th: "สรุปความเห็นผู้วิพากษ์และคำถามจากผู้ฟัง" },
        { ms: "Tulis draf jurnal reflektif (kitaran Gibbs)", th: "ร่างบันทึกสะท้อนคิดตามวงจร Gibbs" }
      ],
      hasil: { ms: "Draf jurnal reflektif", th: "ร่างบันทึกสะท้อนคิด" } },
    { no: 13, fasa: 5, clo: "CLO2",
      ms: "Menulis laporan akhir", th: "การเขียนรายงานสรุปผลสัมมนาฉบับสมบูรณ์ และการตรวจสอบเอกสารอ้างอิง",
      tugasan: [
        { ms: "Tulis dapatan, perbincangan, rumusan dan abstrak", th: "เขียนผล อภิปรายผล สรุป และบทคัดย่อ" },
        { ms: "Buat semakan silang sitasi dan rujukan", th: "ตรวจไขว้การอ้างอิงในเนื้อความกับรายการอ้างอิง" },
        { ms: "Semakan rakan dalam Google Docs", th: "ให้เพื่อนตรวจใน Google Docs" }
      ],
      hasil: { ms: "Draf penuh laporan akhir", th: "ร่างรายงานฉบับเต็ม" } },
    { no: 14, fasa: 5, clo: "CLO3",
      ms: "Menilai dan membangunkan diri", th: "การประเมินและพัฒนาตนเอง แผนพัฒนาตนเอง และเตรียมการนำเสนอภาคสรุป",
      tugasan: [
        { ms: "Nilai diri berdasarkan CLO; nilai rakan", th: "ประเมินตนเองตาม CLO และประเมินเพื่อน" },
        { ms: "Tulis pelan pembangunan diri SMART", th: "เขียนแผนพัฒนาตนเองแบบ SMART" },
        { ms: "Rancang pembentangan padat 7 minit dan lengkapkan portfolio", th: "วางแผนการนำเสนอ 7 นาที และจัดแฟ้มสะสมงาน" }
      ],
      hasil: { ms: "Pelan SMART dan portfolio", th: "แผน SMART และแฟ้มสะสมงาน" } },
    { no: 15, fasa: 6, clo: "CLO1, CLO2, CLO3",
      ms: "Academic Showcase", th: "การนำเสนอสัมมนาภาคสรุป (Academic Showcase) และสรุปรายวิชา",
      tugasan: [
        { ms: "Raptai akhir dan pasang poster", th: "ซ้อมใหญ่และติดตั้งโปสเตอร์" },
        { ms: "Bentang 7 minit dan terangkan poster dalam 60 saat", th: "นำเสนอ 7 นาที และอธิบายโปสเตอร์ใน 60 วินาที" },
        { ms: "Hantar laporan akhir, jurnal reflektif dan portfolio dalam minggu peperiksaan", th: "ส่งรายงานฉบับสมบูรณ์ บันทึกสะท้อนคิด และแฟ้มสะสมงานในสัปดาห์สอบ" },
        { ms: "Hadiri peperiksaan akhir (temu bual / perbincangan)", th: "สอบปลายภาค (สัมภาษณ์/อภิปรายกลุ่ม)" }
      ],
      hasil: { ms: "Pembentangan akhir, laporan akhir, peperiksaan", th: "การนำเสนอภาคสรุป รายงาน และสอบปลายภาค" }, markah: "40% · 20% · 10%" }
  ],

  fasa: {
    1: { ms: "Asas seminar", th: "พื้นฐานการสัมมนา" },
    2: { ms: "Topik dan kajian", th: "หัวข้อและการค้นคว้า" },
    3: { ms: "Persediaan seminar", th: "เตรียมการสัมมนา" },
    4: { ms: "Mini Seminar", th: "สัมมนาในชั้นเรียน" },
    5: { ms: "Refleksi dan laporan", th: "สะท้อนคิดและรายงาน" },
    6: { ms: "Academic Showcase", th: "นำเสนอภาคสรุป" }
  },

  /* Galeri karya pelajar. Tambah karya selepas Mini Seminar / Showcase.
     Contoh:
     { tajuk: "Fungsi Pantun dalam Majlis Perkahwinan Melayu di Daerah Yaring, Pattani",
       oleh: "Nama pelajar", bidang: "Budaya", tahun: "2/2569",
       anugerah: "Pembentang Terbaik", pautan: "https://..." }
     เพิ่มผลงานนิสิตตามรูปแบบตัวอย่างข้างบน */
  karya: []
};
