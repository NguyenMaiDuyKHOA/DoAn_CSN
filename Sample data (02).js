use DacSan;
db.Collection.insertMany([
    {
    	id: "02",
    	tendacsan: "Chù ụ rang me",
    	nguyenlieu: [
    		{
    			tennl: "Chù ụ",
    			luong: "500g",
    			gianl: "100.000đ"
    		},
    		{
    			tennl: "Me",
    			luong: "100g",
    			gianl: "5.000đ"
    		}
    	],
    	huongvi: "Chua ngọt của chù ụ và me",
    	mausac: ["Đỏ","Vàng"],
    	quycach: "Sử dụng đĩa",
    	quytrinhsx: "Chế biến kĩ 20-30p",
    	xuatxu: [
    		{
    			monandantoc: "Kinh",
    		}
    	],
    	loaisanpham: [
    		{
    			phanloai: "Thức ăn",
    			khoiluong: "500g",
    		}
    	],
    	cachsudung: "Dùng ngay sau khi chế biến",
    	hansudung: [
    		{
    			nsx: "Ngày chế biến",
    			hsd: "Trong ngày"
    		}
    	],
    	diadiemban: [
    		{
    			tenquan: "Quán Ngọc Tiền",
    			huyentp: "Trà Cú",
    			phuongxa: "Hàm Tân",
    			sdt: "",
    			xephangcuakh: "Chưa có",
    			nhanxetcuakh: "Chưa có" 
    		}
    	],
    	giaban: [
    		{
    			giamonan: "120.000đ"
    		}
    	]
    },
])