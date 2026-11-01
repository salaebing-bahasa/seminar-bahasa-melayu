# 0113382 Seminar Bahasa Melayu · สัมมนาภาษามลายู

Laman kursus untuk pelajar tahun 3, Program Bahasa Melayu, Universiti Thaksin (semester 2/2569).
เว็บไซต์รายวิชาสำหรับนิสิตชั้นปีที่ 3 สาขาวิชาภาษามลายู มหาวิทยาลัยทักษิณ

## Halaman · หน้าเว็บ

| Fail | Kandungan | เนื้อหา |
|---|---|---|
| `index.html` | Laman utama, atur cara, CLO, pecahan markah | หน้าแรก ตารางเรียน CLOs สัดส่วนคะแนน |
| `perjalanan.html` | Tugasan 15 minggu dengan senarai semak | งาน 15 สัปดาห์ พร้อมช่องติ๊กความคืบหน้า |
| `kit.html` | Peranan, atur cara, skrip, soal jawab, kontingensi, pemasa | ชุดเครื่องมือจัดสัมมนาและตัวจับเวลา |
| `rubrik.html` | Rubrik dengan penilaian kendiri | เกณฑ์ประเมินพร้อมประเมินตนเอง |
| `galeri.html` | Karya pelajar dan anugerah | คลังผลงานนิสิตและรางวัล |
| `dokumen.html` | Pautan 15 bab dokumen pengajaran | ลิงก์เอกสารประกอบการสอน 15 บท |

## Mengemas kini · วิธีแก้ไขเนื้อหา

Hampir semua kandungan berada dalam **`js/data.js`** (minggu, bab, karya) dan **`js/rubrik-data.js`** (rubrik).
เนื้อหาเกือบทั้งหมดอยู่ใน `js/data.js` (สัปดาห์ บท ผลงานนิสิต) และ `js/rubrik-data.js` (เกณฑ์ประเมิน)

**Menambah karya pelajar · เพิ่มผลงานนิสิต** — dalam `js/data.js`, cari `karya: []` dan tambah:

```js
karya: [
  { tajuk: "Tajuk kajian", oleh: "Nama pelajar", bidang: "Bahasa", tahun: "2/2569",
    anugerah: "Pembentang Terbaik", pautan: "https://..." }
]
```

`bidang` boleh `Bahasa`, `Kesusasteraan` atau `Budaya`. `anugerah` dan `pautan` tidak wajib.
