use DacSan;
db.Collection.insertMany([	
    {
    	id: "04",
    	tendacsan: "Bún suông",
    	nguyenlieu: [
    		{
    			tennl: "Bún",
    			luong: "200g",
    			gianl: "3.000đ"
    		},
    		{
    			tennl: "Chả tôm",
    			luong: "100g",
    			gianl: "10.000đ"
    		},
    		{
    			tennl: "Giá đỗ",
    			luong: "200g",
    			gianl: "2.000đ"
    		},
    		{
    			tennl: "Xương heo",
    			luong: "200g",
    			gianl: "10.000đ"
    		}
    	],
    	huongvi: "Hương thơm đậm vị của tôm và xương heo",
    	mausac: "Vàng",
    	quycach: "Sử dụng tô",
    	quytrinhsx: "Chế biến kĩ 50-60p",
    	xuatxu: [
    		{
    			monandantoc: "Kinh"
    		}
    	],
    	loaisanpham: [
    		{
    			phanloai: "Thức ăn",
    			khoiluong: "500g"
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
    			tenquan: "Bún suông Hùi Yến",
    			duong: "56 Hùng Vương",
    			huyentp: "TP Trà Vinh",
    			phuongxa: "Phường 3",
    			sdt: "",
    			xephangcuakh: "Chưa có",
    			nhanxetcuakh: "Chưa có" 
    		}
    	],
    	giaban: [
    		{
    			giamonan: "35.000đ"
    		}
    	]
    },
])