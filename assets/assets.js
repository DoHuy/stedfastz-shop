import gs_logo from "./gs_logo.jpg"
const happy_store = gs_logo;
const upload_area = gs_logo;
const hero_model_img = gs_logo;
const hero_product_img1 = gs_logo;
const hero_product_img2 = gs_logo;
const product_img1 = gs_logo;
const product_img2 = gs_logo;
const product_img3 = gs_logo;
const product_img4 = gs_logo;
const product_img5 = gs_logo;
const product_img6 = gs_logo;
const product_img7 = gs_logo;
const product_img8 = gs_logo;
const product_img9 = gs_logo;
const product_img10 = gs_logo;
const product_img11 = gs_logo;
const product_img12 = gs_logo;
import { ClockFadingIcon, HeadsetIcon, SendIcon } from "lucide-react";
const profile_pic1 = gs_logo;
const profile_pic2 = gs_logo;
const profile_pic3 = gs_logo;

export const assets = {
    upload_area, hero_model_img,
    hero_product_img1, hero_product_img2, gs_logo,
    product_img1, product_img2, product_img3, product_img4, product_img5, product_img6,
    product_img7, product_img8, product_img9, product_img10, product_img11, product_img12,
}

// Cập nhật Danh mục Tiếng Việt
export const categories = ["Tem & Decal", "Đồ chơi & Hiệu năng", "Nội thất & Tiện ích", "Đồ chơi công nghệ", "Thiết bị sạc", "An toàn & Bảo hộ"];

export const dummyRatingsData = [
    { id: "rat_1", rating: 4.8, review: "Lắp vào xe nhìn sang hẳn, chất liệu CNC rất chắc chắn. Shop tư vấn nhiệt tình đúng dòng xe VinFast của mình.", user: { name: 'Minh Tuấn', image: profile_pic1 }, productId: "prod_1", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', product: { name: 'Bộ Ốc Titan', category:'Đồ chơi & Hiệu năng', id:'prod_1'} },
    { id: "rat_2", rating: 5.0, review: "Thảm lót sàn vừa khít với VF8, không mùi nhựa, rất êm chân. Giao hàng nhanh.", user: { name: 'Lan Anh', image: profile_pic2 }, productId: "prod_2", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', product: { name: 'Bộ Ốc Titan', category:'Đồ chơi & Hiệu năng', id:'prod_1'} },
    { id: "rat_3", rating: 4.5, review: "Đèn sáng hơn đèn zin rất nhiều, đi đêm an tâm hẳn. Tuy nhiên lắp đặt hơi lâu một chút.", user: { name: 'Hoàng Nam', image: profile_pic3 }, productId: "prod_3", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', product: { name: 'Bộ Ốc Titan', category:'Đồ chơi & Hiệu năng', id:'prod_1'} },
    { id: "rat_4", rating: 5.0, review: "Sạc dự phòng cho xe máy điện hoạt động tốt, cứu cánh những lúc gần hết pin giữa đường.", user: { name: 'Minh Tuấn', image: profile_pic1 }, productId: "prod_4", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', product: { name: 'Bộ Ốc Titan', category:'Đồ chơi & Hiệu năng', id:'prod_1'} },
    { id: "rat_5", rating: 4.3, review: "Android box chạy mượt, xem Youtube trên xe VinFast không bị giật lag. Đáng tiền.", user: { name: 'Lan Anh', image: profile_pic2 }, productId: "prod_5", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', product: { name: 'Bộ Ốc Titan', category:'Đồ chơi & Hiệu năng', id:'prod_1'} },
    { id: "rat_6", rating: 5.0, review: "Tem xe in sắc nét, dán lên nhìn xe như mới. Sẽ ủng hộ shop tiếp.", user: { name: 'Hoàng Nam', image: profile_pic3 }, productId: "prod_6", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530', product: { name: 'Bộ Ốc Titan', category:'Đồ chơi & Hiệu năng', id:'prod_1'} },
]

export const dummyStoreData = {
    id: "store_1",
    userId: "user_1",
    name: "EV Pro Shop",
    description: "Tại EV Pro Shop, chúng tôi chuyên cung cấp các giải pháp nâng cấp toàn diện cho Xe Điện. Từ thẩm mỹ đến hiệu năng, tìm phụ kiện tốt nhất cho VinFast, Dat Bike và nhiều dòng xe khác.",
    username: "evproshop",
    address: "123 Cầu Giấy, Hà Nội, Việt Nam",
    status: "approved",
    isActive: true,
    logo: happy_store,
    email: "support@evproshop.com",
    contact: "+84 912345678",
    createdAt: "2025-09-04T09:04:16.189Z",
    updatedAt: "2025-09-04T09:04:44.273Z",
    user: {
        id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Admin User",
        email: "admin@evproshop.com",
        image: gs_logo,
    }
}

export const productDummyData = [
    {
        id: "prod_1",
        name: "Bộ Ốc Titan (Gr5)",
        description: "Bộ ốc Titan Gr5 cao cấp cho xe máy điện. Độ bền cao, chịu nhiệt, màu sắc thời thượng (Xanh/Tím/Vàng). Thay thế hoàn hảo cho ốc zin dễ rỉ sét.",
        mrp: 400000,
        price: 250000,
        images: [product_img1, product_img2, product_img3, product_img4],
        category: "Đồ chơi & Hiệu năng",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 29 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 29 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_2",
        name: "Kẹp Điện Thoại Kèm Ô",
        description: "Kẹp điện thoại chống rung trang bị ô che mini. Bảo vệ điện thoại khỏi nắng mưa khi di chuyển. Vật phẩm thiết yếu cho các bác tài xế công nghệ.",
        mrp: 150000,
        price: 90000,
        images: [product_img2],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Đồ chơi công nghệ",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 28 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 28 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_3",
        name: "Bọc Khóa Smartkey Silicon",
        description: "Bọc silicon bền bỉ cho khóa smartkey VinFast Klara/Feliz/Vento. Chống sốc, chống trầy xước và có nhiều màu sắc cá tính.",
        mrp: 50000,
        price: 25000,
        images: [product_img3],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Nội thất & Tiện ích",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 27 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 27 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_4",
        name: "Phuộc Sau RCB (Giảm Xóc)",
        description: "Phuộc sau hiệu năng cao giúp xe vận hành êm ái trên đường xấu. Có thể tùy chỉnh độ nén lò xo. Tương thích hầu hết các dòng xe máy điện phổ thông.",
        mrp: 1200000,
        price: 890000,
        images: [product_img4],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Đồ chơi & Hiệu năng",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 26 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 26 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_5",
        name: "Thảm Lót Sàn 6D (VF8)",
        description: "Thảm lót sàn da 6D sang trọng thiết kế riêng cho VinFast VF8. Chống nước, chống bụi bẩn và dễ dàng vệ sinh. Nâng tầm thẩm mỹ nội thất xe.",
        mrp: 1500000,
        price: 990000,
        images: [product_img5],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Nội thất & Tiện ích",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_6",
        name: "Camera Hành Trình 4K WiFi",
        description: "Camera hành trình Ultra HD 4K góc rộng. Tích hợp quay đêm, ghi đè vòng lặp và kết nối WiFi để xem/tải video trực tiếp trên điện thoại.",
        mrp: 800000,
        price: 550000,
        images: [product_img6],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "An toàn & Bảo hộ",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_7",
        name: "Bộ Tem Trùm Xe Điện",
        description: "Bộ tem trùm toàn thân cho các dòng xe Xmen/Pega. Keo dính tốt, chịu được thời tiết nắng mưa, màu sắc nổi bật giúp cá nhân hóa chiếc xe của bạn.",
        mrp: 300000,
        price: 180000,
        images: [product_img7],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Tem & Decal",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 24 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 24 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_8",
        name: "Android Box cho Ô tô",
        description: "Biến màn hình zin của xe thành máy tính bảng Android. Xem YouTube, Netflix, VTV Go và dùng Google Maps trực tiếp trên xe. Cắm là chạy.",
        mrp: 2000000,
        price: 1450000,
        images: [product_img8],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Đồ chơi công nghệ",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 23 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 23 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_9",
        name: "Bộ Sạc Di Động 3.5kW",
        description: "Sạc di động nhỏ gọn cho ô tô điện. Dòng sạc tùy chỉnh (8A-16A), dây dài 5m, chuẩn cắm Type 2. Tiện lợi mang theo khi đi xa.",
        mrp: 3500000,
        price: 2500000,
        images: [product_img9],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Thiết bị sạc",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 22 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 22 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_10",
        name: "Bóng Đèn Pha LED (H4)",
        description: "Bóng đèn LED siêu sáng thay thế bóng zin. Ánh sáng trắng 6000K, tiết kiệm điện năng, tối ưu cho tuổi thọ bình ắc quy xe điện.",
        mrp: 450000,
        price: 290000,
        images: [product_img10],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Đồ chơi & Hiệu năng",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 21 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 21 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_11",
        name: "Bao Tay Lái Mềm",
        description: "Bao tay cao su mềm chống trơn trượt. Giảm mỏi tay khi lái xe đường dài. Lắp đặt dễ dàng cho hầu hết các loại xe máy điện.",
        mrp: 200000,
        price: 120000,
        images: [product_img11],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Đồ chơi & Hiệu năng",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+0530',
    },
    {
        id: "prod_12",
        name: "Bơm Lốp Mini Cầm Tay",
        description: "Bơm lốp điện tử không dây tiện lợi. Màn hình hiển thị số, tự ngắt khi đủ áp suất. Dùng được cho ô tô, xe máy và xe đạp.",
        mrp: 600000,
        price: 350000,
        images: [product_img12],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "An toàn & Bảo hộ",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530',
    }
];

export const ourSpecsData = [
    { title: "Giao Hàng Toàn Quốc", description: "Giao nhanh đến mọi tỉnh thành. Đóng gói chuyên dụng an toàn cho phụ tùng xe.", icon: SendIcon, accent: '#05DF72' },
    { title: "Hỗ Trợ Lắp Đặt", description: "Tư vấn kỹ thuật online miễn phí. Hỗ trợ đổi trả nếu không tương thích với xe.", icon: ClockFadingIcon, accent: '#FF8904' },
    { title: "Bảo Hành Chính Hãng", description: "Bảo hành 12 tháng cho các sản phẩm điện tử và đồ chơi hiệu năng.", icon: HeadsetIcon, accent: '#A684FF' }
]

export const addressDummyData = {
    id: "addr_1",
    userId: "user_1",
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    street: "456 Lê Duẩn",
    city: "Đà Nẵng",
    state: "DN",
    zip: "550000",
    country: "Vietnam",
    phone: "0905123456",
    createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530',
}

export const couponDummyData = [
    { code: "EVNEW20", description: "Giảm 20% cho chủ xe mới", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:31.183Z" },
    { code: "VF10", description: "Giảm 10% phụ tùng VinFast", discount: 10, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:50.653Z" },
    { code: "HE2025", description: "Giảm 20% đồ đi phượt hè", discount: 20, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:00.811Z" },
    { code: "CLUB10", description: "Giảm 10% thành viên hội xe điện", discount: 10, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:21.279Z" },
    { code: "VIP15", description: "Giảm 15% cho khách VIP", discount: 15, forNewUser: false, forMember: true, isPublic: false, expiresAt: "2027-03-06T00:00:00.000Z", createdAt: "2025-08-22T11:38:20.194Z" }
]

export const dummyUserData = {
    id: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "Tuấn Đỗ",
    email: "tuando@example.com",
    image: gs_logo,
    cart: {}
}

export const orderDummyData = [
    {
        id: "ord_001",
        total: 1240000,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "store_1",
        addressId: "addr_1",
        isPaid: true,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:15:03.929Z",
        updatedAt: "2025-08-22T09:15:50.723Z",
        isCouponUsed: true,
        coupon: couponDummyData[0],
        orderItems: [
            { orderId: "ord_001", productId: "prod_5", quantity: 1, price: 990000, product: productDummyData[4], }, // Thảm sàn
            { orderId: "ord_001", productId: "prod_1", quantity: 1, price: 250000, product: productDummyData[0], }  // Ốc Titan
        ],
        address: addressDummyData,
        user: dummyUserData
    },
    {
        id: "ord_002",
        total: 550000,
        status: "PROCESSING",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "store_1",
        addressId: "addr_1",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:14:35.923Z",
        updatedAt: "2025-08-22T09:15:52.535Z",
        isCouponUsed: false,
        coupon: null,
        orderItems: [
            { orderId: "ord_002", productId: "prod_6", quantity: 1, price: 550000, product: productDummyData[5], }, // Dash Cam
        ],
        address: addressDummyData,
        user: dummyUserData
    }
]

export const storesDummyData = [
    {
        id: "store_1",
        userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "EV Pro Shop",
        description: "Đối tác tin cậy chuyên cung cấp phụ tùng và đồ chơi xe điện tại Việt Nam.",
        username: "evproshop",
        address: "123 Cầu Giấy, Hà Nội, Việt Nam",
        status: "approved",
        isActive: true,
        logo: happy_store,
        email: "contact@evproshop.com",
        contact: "+84 912345678",
        createdAt: "2025-08-22T08:34:15.155Z",
        updatedAt: "2025-08-22T08:34:47.162Z",
        user: dummyUserData,
    }
]

export const dummyAdminDashboardData = {
    "orders": 15,
    "stores": 1,
    "products": 12,
    "revenue": "25000000",
    "allOrders": [
        { "createdAt": "2025-08-20T08:46:58.239Z", "total": 1450000 },
        { "createdAt": "2025-08-22T08:46:21.818Z", "total": 970000 },
        { "createdAt": "2025-08-23T09:15:03.929Z", "total": 2140000 },
        { "createdAt": "2025-08-24T09:14:35.923Z", "total": 4210000 },
        { "createdAt": "2025-08-25T11:56:29.713Z", "total": 1200000 },
    ]
}

export const dummyStoreDashboardData = {
    "ratings": dummyRatingsData,
    "totalOrders": 15,
    "totalEarnings": 25000000,
    "totalProducts": 12
}