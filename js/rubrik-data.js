/* Rubrik penilaian 0113382 — daripada dokumen Bab 4, 6, 8, 9, 13 dan 15.
   Setiap tahap: [mata dipaparkan, nilai untuk kiraan kendiri, Melayu, Thai] */
window.RUBRIK = [
  {
    id: "topik", bab: 4, ms: "Borang Cadangan Topik", th: "แบบเสนอหัวข้อ", markah: 10, wajaran: "Formatif · ประเมินเพื่อพัฒนา", minggu: 4,
    kriteria: [
      { ms: "Kekhususan topik", th: "ความเฉพาะของหัวข้อ", maks: 3, tahap: [["3", 3, "Khusus, ada isu, bahan dan konteks", "เฉพาะ มีประเด็น ข้อมูล บริบท"], ["2", 2, "Agak khusus", "ค่อนข้างเฉพาะ"], ["1", 1, "Masih luas", "ยังกว้าง"], ["0", 0, "Tiada topik", "ไม่มีหัวข้อ"]] },
      { ms: "Soalan dan objektif", th: "คำถามและวัตถุประสงค์", maks: 3, tahap: [["3", 3, "Jelas, sepadan dan boleh dijawab", "ชัด สอดคล้อง ตอบได้"], ["2", 2, "Sebahagian kurang jelas", "บางข้อไม่ชัด"], ["1", 1, "Tidak sepadan", "ไม่สอดคล้องกัน"], ["0", 0, "Tiada", "ไม่มี"]] },
      { ms: "Boleh dilaksana dan ada sumber", th: "ความเป็นไปได้และแหล่งข้อมูล", maks: 2, tahap: [["2", 2, "Realistik, 3 sumber akademik", "สมจริง มีแหล่งวิชาการ 3 แหล่ง"], ["1.5", 1.5, "2 sumber", "2 แหล่ง"], ["1", 1, "Sumber tidak akademik", "แหล่งไม่เป็นวิชาการ"], ["0", 0, "Tiada sumber", "ไม่มีแหล่ง"]] },
      { ms: "Bahasa Melayu", th: "ภาษามลายู", maks: 2, tahap: [["2", 2, "Betul dan formal", "ถูกต้อง เป็นทางการ"], ["1.5", 1.5, "Sedikit kesalahan", "ผิดเล็กน้อย"], ["1", 1, "Banyak kesalahan", "ผิดหลายจุด"], ["0", 0, "Tidak dalam bahasa Melayu", "ไม่ใช่ภาษามลายู"]] }
    ]
  },
  {
    id: "laporan-topik", bab: 6, ms: "Laporan Topik Seminar", th: "รายงานหัวข้อสัมมนา", markah: 20, wajaran: "20%", minggu: 6,
    nota: { ms: "5–7 halaman A4; sekurang-kurangnya 5 sumber (3 akademik); APA edisi ketujuh. Plagiarisme yang ketara: laporan dikembalikan dan markah dikurangkan.", th: "5–7 หน้า A4 อย่างน้อย 5 แหล่ง (วิชาการ 3) อ้างอิง APA 7 รายงานที่คัดลอกอย่างชัดเจนจะถูกส่งคืนและหักคะแนน" },
    kriteria: [
      { ms: "Pengenalan dan pernyataan masalah", th: "บทนำและปัญหา", maks: 4, tahap: [["4", 4, "Jelas, umum ke khusus, masalah tepat", "ชัดเจน จากกว้างไปเฉพาะ"], ["3", 3, "Jelas, masalah kurang tajam", "ปัญหายังไม่คม"], ["2", 2, "Latar belakang umum sahaja", "มีเพียงภูมิหลัง"], ["0–1", 1, "Tiada fokus", "ไม่มีจุดเน้น"]] },
      { ms: "Objektif dan soalan kajian", th: "วัตถุประสงค์และคำถาม", maks: 3, tahap: [["3", 3, "Sepadan dan boleh dicapai", "สอดคล้อง ทำได้จริง"], ["2", 2, "Sebahagian kurang jelas", "บางข้อไม่ชัด"], ["1", 1, "Tidak sepadan", "ไม่สอดคล้อง"], ["0", 0, "Tiada", "ไม่มี"]] },
      { ms: "Tinjauan literatur", th: "การทบทวนวรรณกรรม", maks: 6, tahap: [["5–6", 6, "Sintesis tematik, jurang kajian jelas", "สังเคราะห์ตามประเด็น ช่องว่างชัด"], ["4", 4, "Ada perbandingan, jurang kurang jelas", "มีการเปรียบเทียบ"], ["2–3", 3, "Senarai ringkasan", "เรียงรายการสรุป"], ["0–1", 1, "Sangat terhad", "มีน้อยมาก"]] },
      { ms: "Sitasi dan rujukan APA", th: "การอ้างอิง APA", maks: 4, tahap: [["4", 4, "Lengkap dan tepat", "ครบและถูกต้อง"], ["3", 3, "1–3 kesilapan", "ผิด 1–3 จุด"], ["2", 2, "Banyak kesilapan", "ผิดหลายจุด"], ["0–1", 1, "Tiada sitasi", "ไม่มีการอ้างอิง"]] },
      { ms: "Bahasa Melayu akademik", th: "ภาษามลายูเชิงวิชาการ", maks: 3, tahap: [["3", 3, "Baku, formal, tepat", "มาตรฐาน ทางการ"], ["2", 2, "Sedikit kesalahan", "ผิดเล็กน้อย"], ["1", 1, "Banyak kesalahan", "ผิดหลายจุด"], ["0", 0, "Sukar difahami", "เข้าใจยาก"]] }
    ]
  },
  {
    id: "pembentangan", bab: 8, ms: "Pembentangan Seminar", th: "การนำเสนอสัมมนา", markah: 20, wajaran: "Sebahagian 40%", minggu: "8 · 10–11 · 15",
    nota: { ms: "Digunakan secara formatif dalam Minggu 8, dan untuk penilaian dalam Minggu 10–11 dan 15 bersama rubrik peranan.", th: "สัปดาห์ที่ 8 ใช้เพื่อพัฒนา สัปดาห์ที่ 10–11 และ 15 ใช้ประเมินจริงคู่กับเกณฑ์บทบาท (รวมร้อยละ 40)" },
    kriteria: [
      { ms: "Kandungan", th: "เนื้อหา", maks: 5, tahap: [["5", 5, "Tepat, mendalam, berasaskan sumber", "ถูกต้อง ลึก มีแหล่งอ้างอิง"], ["4", 4, "Tepat, kurang mendalam", "ถูกต้อง ไม่ลึก"], ["2–3", 3, "Ada kesilapan atau umum", "มีข้อผิดหรือกว้างเกินไป"], ["0–1", 1, "Tidak tepat", "ไม่ถูกต้อง"]] },
      { ms: "Struktur dan masa", th: "โครงสร้างและเวลา", maks: 3, tahap: [["3", 3, "Struktur jelas; dalam masa", "ครบ ชัด ตรงเวลา"], ["2", 2, "Tersusun; lebih atau kurang 1–2 minit", "เกินหรือขาด 1–2 นาที"], ["1", 1, "Kurang tersusun", "ไม่ค่อยเป็นลำดับ"], ["0", 0, "Tiada struktur", "ไม่มีโครงสร้าง"]] },
      { ms: "Bahasa Melayu", th: "ภาษามลายู", maks: 4, tahap: [["4", 4, "Formal, santun, tepat", "ทางการ สุภาพ ถูกต้อง"], ["3", 3, "Sedikit kesalahan", "ผิดเล็กน้อย"], ["2", 2, "Bercampur bahasa basahan", "ปนภาษาปาก"], ["0–1", 1, "Sukar difahami", "เข้าใจยาก"]] },
      { ms: "Penyampaian", th: "การถ่ายทอด", maks: 3, tahap: [["3", 3, "Suara jelas, kontak mata, yakin", "เสียงชัด สบตา มั่นใจ"], ["2", 2, "Baik, kadang-kadang membaca", "ดี อ่านบ้าง"], ["1", 1, "Banyak membaca", "อ่านเป็นส่วนใหญ่"], ["0", 0, "Membaca semua", "อ่านทั้งหมด"]] },
      { ms: "Penggunaan slaid", th: "การใช้สไลด์", maks: 2, tahap: [["2", 2, "Menyokong penerangan", "สนับสนุนคำอธิบาย"], ["1.5", 1.5, "Baik, sedikit padat", "ดี แน่นเล็กน้อย"], ["1", 1, "Terlalu banyak teks", "ข้อความมาก"], ["0", 0, "Tidak membantu", "ไม่ช่วย"]] },
      { ms: "Soal jawab", th: "ถาม-ตอบ", maks: 3, tahap: [["3", 3, "Tepat, ringkas, santun", "ตรง กระชับ สุภาพ"], ["2", 2, "Tepat, kurang ringkas", "ตรง แต่ยาว"], ["1", 1, "Kurang tepat", "ไม่ค่อยตรง"], ["0", 0, "Tidak dapat menjawab", "ตอบไม่ได้"]] }
    ]
  },
  {
    id: "peranan", bab: 9, ms: "Pelaksanaan Peranan", th: "การปฏิบัติหน้าที่ในทีมงาน", markah: 20, wajaran: "Sebahagian 40%", minggu: "10–11 · 15",
    kriteria: [
      { ms: "Persediaan", th: "การเตรียมตัว", maks: 4, tahap: [["4", 4, "Skrip dan bahan lengkap lebih awal", "สคริปต์และสื่อพร้อมล่วงหน้า"], ["3", 3, "Lengkap, lewat sedikit", "พร้อมแต่ช้าเล็กน้อย"], ["2", 2, "Tidak lengkap", "ไม่ครบ"], ["0–1", 1, "Tiada persediaan", "ไม่ได้เตรียม"]] },
      { ms: "Pelaksanaan tugas", th: "การปฏิบัติงาน", maks: 6, tahap: [["5–6", 6, "Lancar, tepat, mengikut atur cara", "ราบรื่น ตรงกำหนดการ"], ["4", 4, "Baik, sedikit kekeliruan", "ดี สับสนเล็กน้อย"], ["2–3", 3, "Banyak bantuan", "ต้องช่วยมาก"], ["0–1", 1, "Tidak dibuat", "ไม่ได้ปฏิบัติ"]] },
      { ms: "Bahasa dan kesantunan", th: "ภาษาและความสุภาพ", maks: 4, tahap: [["4", 4, "Formal, santun, sapaan tepat", "ทางการ สุภาพ เรียกขานถูก"], ["3", 3, "Sedikit kesalahan", "ผิดเล็กน้อย"], ["2", 2, "Bercampur bahasa basahan", "ปนภาษาปาก"], ["0–1", 1, "Tidak sesuai", "ไม่เหมาะสม"]] },
      { ms: "Kerjasama", th: "การทำงานร่วมกัน", maks: 3, tahap: [["3", 3, "Aktif membantu ahli lain", "ช่วยเหลือผู้อื่นอย่างแข็งขัน"], ["2", 2, "Turut membantu", "ให้ความร่วมมือ"], ["1", 1, "Kurang terlibat", "มีส่วนร่วมน้อย"], ["0", 0, "Tidak terlibat", "ไม่มีส่วนร่วม"]] },
      { ms: "Pengurusan masa", th: "การบริหารเวลา", maks: 3, tahap: [["3", 3, "Tepat masa", "ตรงเวลา"], ["2", 2, "Lewat 1–3 minit", "ช้า 1–3 นาที"], ["1", 1, "Lewat ketara", "ช้ามาก"], ["0", 0, "Tidak mengawal", "ไม่ควบคุมเวลา"]] }
    ]
  },
  {
    id: "laporan-akhir", bab: 13, ms: "Laporan Akhir Seminar", th: "รายงานฉบับสมบูรณ์", markah: 20, wajaran: "Sebahagian 20%", minggu: "13 · 15",
    nota: { ms: "10–15 halaman A4; sekurang-kurangnya 8 sumber (5 akademik). Komponen 20% = (laporan akhir 20 + jurnal reflektif 10) ÷ 30 × 20; pemberat sebenar ditentukan oleh pensyarah.", th: "10–15 หน้า A4 อย่างน้อย 8 แหล่ง (วิชาการ 5) องค์ประกอบร้อยละ 20 = (รายงาน 20 + บันทึกสะท้อนคิด 10) ÷ 30 × 20 สัดส่วนจริงอาจารย์เป็นผู้กำหนด" },
    kriteria: [
      { ms: "Abstrak dan pengenalan", th: "บทคัดย่อและบทนำ", maks: 3, tahap: [["3", 3, "Lengkap, padat, jelas", "ครบ กระชับ ชัด"], ["2", 2, "Lengkap", "ครบ"], ["1", 1, "Tidak lengkap", "ไม่ครบ"], ["0", 0, "Tiada", "ไม่มี"]] },
      { ms: "Tinjauan literatur dan metodologi", th: "ทบทวนวรรณกรรมและวิธีการ", maks: 3, tahap: [["3", 3, "Sintesis; kaedah jelas", "สังเคราะห์ วิธีชัด"], ["2", 2, "Baik, kurang sintesis", "ดี สังเคราะห์น้อย"], ["1", 1, "Senarai; kaedah kabur", "เรียงรายการ วิธีไม่ชัด"], ["0", 0, "Tiada", "ไม่มี"]] },
      { ms: "Dapatan", th: "ผลการศึกษา", maks: 4, tahap: [["4", 4, "Tersusun, tepat, bersokong data", "เป็นระบบ ถูกต้อง มีข้อมูล"], ["3", 3, "Tepat, kurang tersusun", "ถูก ไม่ค่อยเป็นระบบ"], ["2", 2, "Bercampur tafsiran", "ปนการตีความ"], ["0–1", 1, "Tidak jelas", "ไม่ชัด"]] },
      { ms: "Perbincangan", th: "อภิปรายผล", maks: 4, tahap: [["4", 4, "Tafsir, banding, implikasi, batasan", "ครบ 4 ด้าน"], ["3", 3, "Ada bandingan", "มีการเปรียบเทียบ"], ["2", 2, "Mengulang dapatan", "ซ้ำผล"], ["0–1", 1, "Tiada", "ไม่มี"]] },
      { ms: "Rumusan dan cadangan", th: "สรุปและข้อเสนอแนะ", maks: 2, tahap: [["2", 2, "Menjawab soalan; cadangan konkrit", "ตอบคำถาม เสนอเป็นรูปธรรม"], ["1.5", 1.5, "Baik", "ดี"], ["1", 1, "Umum", "กว้าง"], ["0", 0, "Tiada", "ไม่มี"]] },
      { ms: "Rujukan APA", th: "อ้างอิง APA", maks: 2, tahap: [["2", 2, "Lengkap dan tepat", "ครบและถูก"], ["1.5", 1.5, "1–3 kesilapan", "ผิด 1–3 จุด"], ["1", 1, "Banyak kesilapan", "ผิดหลายจุด"], ["0", 0, "Tiada", "ไม่มี"]] },
      { ms: "Bahasa dan format", th: "ภาษาและรูปแบบ", maks: 2, tahap: [["2", 2, "Baku, kemas", "มาตรฐาน เรียบร้อย"], ["1.5", 1.5, "Sedikit kesalahan", "ผิดเล็กน้อย"], ["1", 1, "Banyak kesalahan", "ผิดหลายจุด"], ["0", 0, "Sukar difahami", "เข้าใจยาก"]] }
    ]
  },
  {
    id: "peperiksaan", bab: 15, ms: "Peperiksaan Akhir", th: "สอบปลายภาค (สัมภาษณ์/อภิปราย)", markah: 10, wajaran: "10%", minggu: "Minggu peperiksaan",
    nota: { ms: "Temu bual individu (10 minit) atau perbincangan kumpulan kecil (3–4 orang, 20 minit) dalam bahasa Melayu.", th: "สัมภาษณ์รายบุคคล 10 นาที หรืออภิปรายกลุ่มย่อย 3–4 คน 20 นาที เป็นภาษามลายู" },
    kriteria: [
      { ms: "Kefahaman konsep", th: "ความเข้าใจแนวคิด", maks: 4, tahap: [["4", 4, "Tepat, lengkap dengan contoh", "ถูกต้อง ครบ มีตัวอย่าง"], ["3", 3, "Tepat, kurang contoh", "ถูก ตัวอย่างน้อย"], ["2", 2, "Sebahagian tepat", "ถูกบางส่วน"], ["0–1", 1, "Tidak tepat", "ไม่ถูกต้อง"]] },
      { ms: "Aplikasi pengalaman", th: "การประยุกต์ประสบการณ์", maks: 3, tahap: [["3", 3, "Mengaitkan dengan kajian dan seminar sendiri secara mendalam", "เชื่อมโยงกับงานของตนอย่างลึก"], ["2", 2, "Ada kaitan", "มีการเชื่อมโยง"], ["1", 1, "Umum", "กว้าง"], ["0", 0, "Tiada", "ไม่มี"]] },
      { ms: "Bahasa Melayu lisan", th: "ภาษามลายูด้วยวาจา", maks: 3, tahap: [["3", 3, "Lancar, formal, tepat", "คล่อง ทางการ ถูกต้อง"], ["2", 2, "Baik, sedikit kesalahan", "ดี ผิดเล็กน้อย"], ["1", 1, "Banyak kesalahan", "ผิดหลายจุด"], ["0", 0, "Sukar difahami", "เข้าใจยาก"]] }
    ]
  }
];
