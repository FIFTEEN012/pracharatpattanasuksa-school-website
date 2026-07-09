# เว็บไซต์โรงเรียนประชารัฐพัฒนศึกษา

เว็บไซต์ทางการของโรงเรียนประชารัฐพัฒนศึกษา สร้างด้วย Next.js App Router และ Tailwind CSS สำหรับประชาสัมพันธ์ข้อมูลโรงเรียน ข่าว กิจกรรม ดาวน์โหลดเอกสาร และช่องทางติดต่อ

## การติดตั้งและรันโปรเจกต์

```bash
npm install
npm run dev
```

จากนั้นเปิดเว็บที่ `http://localhost:3000`

## คำสั่งที่ใช้บ่อย

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## SEO และโดเมน

ค่า Open Graph ใช้ `NEXT_PUBLIC_SITE_URL` เป็นฐานของ URL หากยังไม่ตั้งค่า ระบบจะใช้ `http://localhost:3000` สำหรับการพัฒนาในเครื่อง

## การแก้ไขข้อมูลเว็บไซต์

ข้อมูล mock หลักอยู่ในไฟล์ `src/data/site.ts`

- ข้อมูลโรงเรียน: แก้ที่ `schoolInfo`
- เมนูหลัก: แก้ที่ `navItems`
- สถิติตัวอย่างหน้าแรก: แก้ที่ `schoolStats`
- ลิงก์ด่วน: แก้ที่ `quickLinks`
- ข่าวประชาสัมพันธ์: แก้ที่ `news`
- กิจกรรมโรงเรียน: แก้ที่ `activities`
- บุคลากร: แก้ที่ `director` และ `personnelGroups`
- เอกสารดาวน์โหลด: แก้ที่ `downloads`

## การเปลี่ยนภาพ Placeholder

ภาพ placeholder อยู่ใน `public/images`

- `school-hero-placeholder.svg`: ภาพอาคารเรียนหน้าแรก
- `news-placeholder.svg`: ภาพข่าว
- `activity-placeholder.svg`: ภาพกิจกรรม
- `person-placeholder.svg`: ภาพบุคลากร
- `map-placeholder.svg`: แผนที่ placeholder
- `og-placeholder.svg`: รูป Open Graph สำหรับแชร์ลิงก์

เมื่อต้องการใช้ภาพจริง ให้วางไฟล์ใหม่ใน `public/images` แล้วแก้ path ใน `src/data/site.ts`

## หมายเหตุ

- ฟอร์มติดต่อเป็น mock interaction ฝั่งหน้าเว็บ ยังไม่ได้เชื่อมต่อระบบส่งข้อความจริง
- เบอร์โทร อีเมล Facebook, Google Maps Embed และไฟล์ดาวน์โหลดใช้ placeholder จนกว่าจะมีข้อมูลจริง
- ไม่มีการใส่ชื่อบุคลากรจริงที่ไม่ได้รับมา ข้อมูลบุคลากรทั้งหมดใช้ `ชื่อ-สกุล` และ `ตำแหน่ง` เพื่อรอแก้ไข
