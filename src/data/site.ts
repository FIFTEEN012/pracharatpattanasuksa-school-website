export type NewsCategory =
  | "ข่าวทั่วไป"
  | "กิจกรรมโรงเรียน"
  | "ประกาศ"
  | "รับสมัครนักเรียน";

export type NewsItem = {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
  attachment?: {
    label: string;
    url: string;
  };
};

export type ActivityItem = {
  title: string;
  date: string;
  description: string;
  image: string;
};

export type PersonnelMember = {
  name: string;
  position: string;
  image: string;
};

export type PersonnelGroup = {
  groupName: string;
  members: PersonnelMember[];
};

export type DownloadItem = {
  title: string;
  category: "แบบฟอร์มราชการ" | "เอกสารนักเรียน" | "เอกสารครู" | "แผนปฏิบัติการ";
  updatedAt: string;
  fileUrl: string;
  status: "รออัปโหลดไฟล์" | "พร้อมดาวน์โหลด";
};

export const schoolInfo = {
  nameTh: "โรงเรียนประชารัฐพัฒนศึกษา",
  nameEn: "Pracharatpattanasuksa School",
  affiliation: "สำนักงานเขตพื้นที่การศึกษามัธยมศึกษากาฬสินธุ์",
  address:
    "หมู่ที่ 5 บ้านหนองไผ่ ตำบลหมูม่น อำเภอสมเด็จ จังหวัดกาฬสินธุ์",
  motto: "สามัคคี มีวินัย ใจอาสา",
  philosophy: "ทนโต เสฏโฐ มนุสเสสุ",
  identity: "ไหว้งาม ตามมารยาทไทย",
  uniqueness: "รอเพิ่มข้อมูลเอกลักษณ์ของสถานศึกษา",
  colors: [
    { name: "สีม่วง", value: "#5B259F", description: "แสดงถึงความสง่างามและความมุ่งมั่น" },
    { name: "สีเหลือง", value: "#F6C945", description: "แสดงถึงความเจริญงอกงามและปัญญา" },
  ],
  phone: "รอเพิ่มเบอร์โทรศัพท์",
  email: "รอเพิ่มอีเมลโรงเรียน",
  facebook: "รอเพิ่มลิงก์ Facebook Page",
  officeHours: "จันทร์ - ศุกร์ เวลา 08:30 - 16:30 น.",
  heroImage: "/images/school-hero-placeholder.svg",
};

export const navItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "ข้อมูลโรงเรียน", href: "/about" },
  { label: "บุคลากร", href: "/personnel" },
  { label: "ข่าวประชาสัมพันธ์", href: "/news" },
  { label: "กิจกรรม", href: "/activities" },
  { label: "ดาวน์โหลด", href: "/downloads" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export const schoolStats = [
  { label: "นักเรียน", value: "1,258", unit: "คน" },
  { label: "ครู", value: "78", unit: "คน" },
  { label: "บุคลากร", value: "32", unit: "คน" },
  { label: "ห้องเรียน", value: "32", unit: "ห้อง" },
];

export const quickLinks = [
  { label: "ระบบ SGS", description: "สำหรับตรวจสอบผลการเรียน", href: "#", status: "รอเพิ่มลิงก์" },
  { label: "Google Classroom", description: "ห้องเรียนออนไลน์", href: "#", status: "รอเพิ่มลิงก์" },
  { label: "ดาวน์โหลดเอกสาร", description: "แบบฟอร์มและเอกสารสำคัญ", href: "/downloads", status: "พร้อมใช้งาน" },
  { label: "ติดต่อโรงเรียน", description: "ช่องทางสอบถามข้อมูล", href: "/contact", status: "พร้อมใช้งาน" },
];

export const newsCategories: NewsCategory[] = [
  "ข่าวทั่วไป",
  "กิจกรรมโรงเรียน",
  "ประกาศ",
  "รับสมัครนักเรียน",
];

export const news: NewsItem[] = [
  {
    slug: "semester-registration-1-2567",
    title: "ประกาศเปิดภาคเรียน ภาคเรียนที่ 1/2567",
    category: "ประกาศ",
    date: "20 พ.ค. 2567",
    excerpt:
      "แจ้งกำหนดการเปิดภาคเรียนและแนวปฏิบัติสำหรับนักเรียน ผู้ปกครอง และบุคลากรของโรงเรียน",
    content: [
      "โรงเรียนประชารัฐพัฒนศึกษาขอแจ้งกำหนดการเปิดภาคเรียน ภาคเรียนที่ 1 ปีการศึกษา 2567 เพื่อให้นักเรียนและผู้ปกครองเตรียมความพร้อมก่อนเข้าเรียน",
      "รายละเอียดกำหนดการ เครื่องแบบ อุปกรณ์การเรียน และแนวปฏิบัติอื่น ๆ จะประกาศเพิ่มเติมผ่านเว็บไซต์และช่องทางประชาสัมพันธ์ของโรงเรียน",
      "หมายเหตุ: เนื้อหานี้เป็นข้อมูลตัวอย่าง รอเพิ่มประกาศฉบับจริงจากโรงเรียน",
    ],
    image: "/images/news-placeholder.svg",
    attachment: {
      label: "รอเพิ่มไฟล์ประกาศ PDF",
      url: "#",
    },
  },
  {
    slug: "new-student-orientation-2567",
    title: "รับสมัครนักเรียนใหม่ ปีการศึกษา 2567",
    category: "รับสมัครนักเรียน",
    date: "17 พ.ค. 2567",
    excerpt:
      "รายละเอียดกำหนดการรับสมัคร คุณสมบัติ และเอกสารประกอบการสมัครสำหรับนักเรียนใหม่",
    content: [
      "โรงเรียนประชารัฐพัฒนศึกษาเตรียมเปิดรับสมัครนักเรียนใหม่ ปีการศึกษา 2567 โดยจะแจ้งปฏิทินการรับสมัครและเอกสารที่เกี่ยวข้องอย่างเป็นทางการอีกครั้ง",
      "ผู้ปกครองสามารถติดตามข่าวสารผ่านเว็บไซต์โรงเรียนและช่องทางประชาสัมพันธ์หลักของโรงเรียน",
      "หมายเหตุ: ข้อมูลนี้เป็น mock data สำหรับเตรียมหน้าเว็บไซต์",
    ],
    image: "/images/news-placeholder.svg",
  },
  {
    slug: "final-exam-schedule-2-2566",
    title: "การสอบปลายภาคเรียนที่ 2 ปีการศึกษา 2566",
    category: "ข่าวทั่วไป",
    date: "13 พ.ค. 2567",
    excerpt:
      "แจ้งตารางสอบ แนวทางปฏิบัติ และข้อควรเตรียมตัวก่อนเข้าสอบปลายภาคเรียน",
    content: [
      "งานวิชาการแจ้งแนวทางการสอบปลายภาคเรียน เพื่อให้นักเรียนเตรียมความพร้อมและปฏิบัติตามระเบียบของโรงเรียน",
      "ตารางสอบฉบับจริงจะอัปโหลดในส่วนดาวน์โหลดเอกสารเมื่อได้รับการยืนยันจากฝ่ายงานที่เกี่ยวข้อง",
    ],
    image: "/images/news-placeholder.svg",
  },
  {
    slug: "school-cleaning-day-2567",
    title: "กิจกรรมพัฒนาโรงเรียน ประจำปี 2567",
    category: "กิจกรรมโรงเรียน",
    date: "10 พ.ค. 2567",
    excerpt:
      "กิจกรรมส่งเสริมจิตอาสาและความรับผิดชอบร่วมกันของนักเรียน ครู และชุมชน",
    content: [
      "โรงเรียนจัดกิจกรรมพัฒนาโรงเรียนเพื่อส่งเสริมอัตลักษณ์ด้านจิตอาสา ความสามัคคี และการดูแลพื้นที่ส่วนรวม",
      "รออัปโหลดภาพกิจกรรมและรายละเอียดเพิ่มเติม",
    ],
    image: "/images/news-placeholder.svg",
  },
  {
    slug: "parent-meeting-2567",
    title: "ประชุมผู้ปกครอง ประจำภาคเรียนที่ 1/2567",
    category: "ข่าวทั่วไป",
    date: "8 พ.ค. 2567",
    excerpt:
      "เชิญผู้ปกครองเข้าร่วมรับฟังนโยบาย แนวทางดูแลนักเรียน และข้อมูลจากครูที่ปรึกษา",
    content: [
      "โรงเรียนขอเชิญผู้ปกครองเข้าร่วมประชุมเพื่อสร้างความเข้าใจร่วมกันในการดูแล ส่งเสริม และพัฒนาผู้เรียน",
      "กำหนดการและสถานที่จัดประชุมเป็นข้อมูลตัวอย่าง รอเพิ่มข้อมูลจริง",
    ],
    image: "/images/news-placeholder.svg",
  },
  {
    slug: "teacher-development-workshop-2567",
    title: "อบรมพัฒนาศักยภาพครูและบุคลากร",
    category: "กิจกรรมโรงเรียน",
    date: "5 พ.ค. 2567",
    excerpt:
      "กิจกรรมแลกเปลี่ยนเรียนรู้เพื่อพัฒนาการจัดการเรียนการสอนและการใช้เทคโนโลยี",
    content: [
      "คณะครูและบุคลากรเข้าร่วมการอบรมเพื่อยกระดับคุณภาพการจัดการเรียนรู้และการบริหารจัดการสถานศึกษา",
      "รอเพิ่มรายละเอียดหัวข้ออบรมและภาพกิจกรรม",
    ],
    image: "/images/news-placeholder.svg",
  },
];

export const activities: ActivityItem[] = [
  {
    title: "กิจกรรมวันไหว้ครู ประจำปี 2567",
    date: "มิ.ย. 2567",
    description:
      "กิจกรรมส่งเสริมความกตัญญูและรักษาขนบธรรมเนียมอันดีงามของไทย",
    image: "/images/activity-placeholder.svg",
  },
  {
    title: "พิธีทำบุญตักบาตรในวันสำคัญ",
    date: "มิ.ย. 2567",
    description:
      "ส่งเสริมคุณธรรม จริยธรรม และการมีส่วนร่วมระหว่างโรงเรียนกับชุมชน",
    image: "/images/activity-placeholder.svg",
  },
  {
    title: "กิจกรรมพัฒนาผู้เรียนและจิตอาสา",
    date: "พ.ค. 2567",
    description:
      "นักเรียนร่วมกันพัฒนาพื้นที่โรงเรียนตามคำขวัญ สามัคคี มีวินัย ใจอาสา",
    image: "/images/activity-placeholder.svg",
  },
  {
    title: "กิจกรรมเปิดบ้านวิชาการ",
    date: "รอเพิ่มวันที่",
    description:
      "นำเสนอผลงานนักเรียนและนวัตกรรมการเรียนรู้ของกลุ่มสาระการเรียนรู้",
    image: "/images/activity-placeholder.svg",
  },
  {
    title: "การแข่งขันทักษะทางวิชาการ",
    date: "รอเพิ่มวันที่",
    description:
      "ส่งเสริมศักยภาพผู้เรียนและสร้างประสบการณ์การเรียนรู้นอกห้องเรียน",
    image: "/images/activity-placeholder.svg",
  },
  {
    title: "กิจกรรมส่งเสริมสุขภาพนักเรียน",
    date: "รอเพิ่มวันที่",
    description:
      "ดูแลสุขภาพกายและสุขภาพใจของนักเรียนอย่างเหมาะสมตามวัย",
    image: "/images/activity-placeholder.svg",
  },
];

export const director: PersonnelMember = {
  name: "ชื่อ-สกุล",
  position: "ผู้อำนวยการโรงเรียน",
  image: "/images/person-placeholder.svg",
};

export const personnelGroups: PersonnelGroup[] = [
  {
    groupName: "กลุ่มบริหารวิชาการ",
    members: [
      { name: "ชื่อ-สกุล", position: "หัวหน้ากลุ่มบริหารวิชาการ", image: "/images/person-placeholder.svg" },
      { name: "ชื่อ-สกุล", position: "ครู / บุคลากร", image: "/images/person-placeholder.svg" },
    ],
  },
  {
    groupName: "กลุ่มบริหารงบประมาณ",
    members: [
      { name: "ชื่อ-สกุล", position: "หัวหน้ากลุ่มบริหารงบประมาณ", image: "/images/person-placeholder.svg" },
      { name: "ชื่อ-สกุล", position: "ครู / บุคลากร", image: "/images/person-placeholder.svg" },
    ],
  },
  {
    groupName: "กลุ่มบริหารบุคคล",
    members: [
      { name: "ชื่อ-สกุล", position: "หัวหน้ากลุ่มบริหารบุคคล", image: "/images/person-placeholder.svg" },
      { name: "ชื่อ-สกุล", position: "ครู / บุคลากร", image: "/images/person-placeholder.svg" },
    ],
  },
  {
    groupName: "กลุ่มบริหารทั่วไป",
    members: [
      { name: "ชื่อ-สกุล", position: "หัวหน้ากลุ่มบริหารทั่วไป", image: "/images/person-placeholder.svg" },
      { name: "ชื่อ-สกุล", position: "ครู / บุคลากร", image: "/images/person-placeholder.svg" },
    ],
  },
];

export const downloads: DownloadItem[] = [
  {
    title: "แบบฟอร์มคำร้องทั่วไป",
    category: "แบบฟอร์มราชการ",
    updatedAt: "15 พ.ค. 2567",
    fileUrl: "#",
    status: "รออัปโหลดไฟล์",
  },
  {
    title: "ใบสมัครนักเรียนใหม่",
    category: "เอกสารนักเรียน",
    updatedAt: "10 พ.ค. 2567",
    fileUrl: "#",
    status: "รออัปโหลดไฟล์",
  },
  {
    title: "แบบฟอร์มขอเอกสารทางการศึกษา",
    category: "เอกสารนักเรียน",
    updatedAt: "10 พ.ค. 2567",
    fileUrl: "#",
    status: "รออัปโหลดไฟล์",
  },
  {
    title: "แบบบันทึกการเยี่ยมบ้านนักเรียน",
    category: "เอกสารครู",
    updatedAt: "5 พ.ค. 2567",
    fileUrl: "#",
    status: "รออัปโหลดไฟล์",
  },
  {
    title: "แผนปฏิบัติการประจำปี",
    category: "แผนปฏิบัติการ",
    updatedAt: "30 เม.ย. 2567",
    fileUrl: "#",
    status: "รออัปโหลดไฟล์",
  },
];
