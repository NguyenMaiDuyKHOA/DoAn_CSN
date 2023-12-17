use DacSan;
db.Collection.insertMany([
    {
    	id: "03",
    	tendacsan: "Bánh canh Bến Có",
    	nguyenlieu: [
    		{
    			tennl: "Bánh canh",
    			luong: "200g",
    			gianl: "3.000đ"
    		},
    		{
    			tennl: "Xương heo",
    			luong: "200g",
    			gianl: "10.000đ"
    		},
    		{
    			tennl: "Giá đỗ",
    			luong: "100g",
    			gianl: "2.000đ"
    		}
    	],
    	huongvi: "Hương thơm đậm đà của xương heo",
    	mausac: "Trắng",
    	quycach: "Sử dụng tô",
    	quytrinhsx: "Chế biến kĩ 50-60p",
    	xuatxu: [
    		{
    			monandantoc: "Kinh",
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
    			tenquan: "Quán Út Hảo",
    			duong: "QL53",
    			huyentp: "Châu Thành",
    			phuongxa: "Nguyệt Hóa",
    			sdt: "",
    			xephangcuakh: "Chưa có",
    			nhanxetcuakh: "Chưa có" 
    		}
    	],
    	giaban: [
    		{
    			giamonan: "25.000đ",
    			phuphiphatsinh: ["Bánh canh thêm(5.000đ)"]
    		}
    	]
    },
])