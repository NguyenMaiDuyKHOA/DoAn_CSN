use DacSan;
db.Collection.insertMany([
    {
    	id: "01",
    	tendacsan: "Bún nước lèo",
    	nguyenlieu: [
    		{
    			tennl: "Bún",
    			luong: "200g",
    			gianl: 3000
    		},
    		{
    			tennl: "Mắm",
    			luong: "50g",
    			gianl: 2000
    		},
    		{
    			tennl: "Cá",
    			luong: "300g",
    			gianl: 10000
    		},
    		{
    			tennl: "Rau sống",
    			luong: "200g",
    			gianl: 5000
    		}
    	],
    	huongvi: "Hương thơm đặc trưng của mắm",
    	mausac: "Vàng",
    	quycach: "Sử dụng tô",
    	quytrinhsx: "Chế biến nhanh 10-20p",
    	xuatxu: [
    		{
    			monandantoc: "Khmer"
    		}
    	],
    	loaisanpham: [
    		{
    			phanloai: "Thức ăn",
    			khoiluong: "500g"
    		}
    	],
    	cachsudung: "Ăn ngay sau khi chế biến",
    	hansudung: [
    		{
    			nsx: "Ngày chế biến",
    			hsd: "Trong ngày"
    		}
    	],
    	diadiemban: [
    		{
    			tenquan: "Bún nước lèo Đồng Khởi",
    			duong: "Đường Đồng Khởi",
    			huyentp: "TP Trà Vinh",
    			phuongxa: "Phường 6",
    			sdt: "",
    			xephangcuakh: "Chưa có",
    			nhanxetcuakh: "Chưa có" 
    		}
    	],
    	giaban: [
    		{
    			giamonan: 30000,
    			phuphiphatsinh: [
    			    {
    			        huyet: 1000,
    			        banhgio: 1000,
    			        banhgia: 3000
    			    }        
    			]
    		}
    	]
    },
    {
    	id: "02",
    	tendacsan: "Chù ụ rang me",
    	nguyenlieu: [
    		{
    			tennl: "Chù ụ",
    			luong: "500g",
    			gianl: 100000
    		},
    		{
    			tennl: "Me",
    			luong: "100g",
    			gianl: 5000
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
    			giamonan: 120000
    		}
    	]
    },
    {
    	id: "03",
    	tendacsan: "Bánh canh Bến Có",
    	nguyenlieu: [
    		{
    			tennl: "Bánh canh",
    			luong: "200g",
    			gianl: 3000
    		},
    		{
    			tennl: "Xương heo",
    			luong: "200g",
    			gianl: 10000
    		},
    		{
    			tennl: "Giá đỗ",
    			luong: "100g",
    			gianl: 2000
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
    			tenquan: "Quán Chân cầu Bến Có",
    			duong: "QL53, ấp Bến Có",
    			huyentp: "Châu Thành",
    			phuongxa: "Nguyệt Hóa",
    			sdt: "",
    			xephangcuakh: "Chưa có",
    			nhanxetcuakh: "Chưa có" 
    		}
    	],
    	giaban: [
    		{
    			giamonan: 30000,
    			phuphiphatsinh: [
    			    {
    			        bancanhthem: 5000
    			    }
    			]
    		}
    	]
    },
    {
    	id: "04",
    	tendacsan: "Bún suông",
    	nguyenlieu: [
    		{
    			tennl: "Bún",
    			luong: "200g",
    			gianl: 3000
    		},
    		{
    			tennl: "Chả tôm",
    			luong: "100g",
    			gianl: 10000
    		},
    		{
    			tennl: "Giá đỗ",
    			luong: "200g",
    			gianl: 2000
    		},
    		{
    			tennl: "Xương heo",
    			luong: "200g",
    			gianl: 10000
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
    			tenquan: " Quán Bún suông",
    			duong: "Đường Phan Đình Phùng",
    			huyentp: "TP Trà Vinh",
    			phuongxa: "Phường 3",
    			sdt: "",
    			xephangcuakh: "Chưa có",
    			nhanxetcuakh: "Chưa có" 
    		}
    	],
    	giaban: [
    		{
    			giamonan: 40000
    		}
    	]
    },
    {
        id: "05",
        tendacsan: "Cháo cá khoai",
        nguyenlieu: [
            {
                tennl: "Gạo",
                luong: "200g",
                gianl: 3000
            },
            {
                tennl: "Cá khoai",
                luong: "200g",
                gianl: 15000
            },
            {
                tennl: "Rau sống",
                luong: "100g",
                gianl: 2000
            }
        ],
        huongvi: "Hương thơm đâm vị, ngọt thịt của cá",
        mausac: "Trắng",
        quycach: "Sử dụng tô",
        quytrinhsx: "Chế biến kĩ 30-45p",
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
                tenquan: "Quán cháo",
                duong: "Đường Trần Phú",
                huyentp: "TP Trà Vinh",
                phuongxa: "Phường 2",
                sdt: "",
                xephangcuakh: "Chưa có",
                nhanxetcuakh: "Chưa có"                
            }
        ],
        giaban: [
            {
                giamonan: 30000
            }
        ]
    },
    {
        id: "06",
        tendacsan: "Dừa sáp",
        huongvi: "Hương thơm của dừa, cơm dừa rất dẻo",
        mausac: "Trắng",
        quycach: "Sử đĩa",
        quytrinhsx: "Trồng trọt",
        xuatxu: [
            {
                cososx: [
                    {
                        tencs: "Dừa sáp Thi Thi",
                        diachics: [
                            {
                                tenduong: "171 QL60",
                                tenhuyentp: "TP Trà Vinh",
                                tenphuongxa: "Khóm 3"
                            }
                        ],
                        sdtcs: ""
                    }
                ],
                cososx: [
                    {
                        tencs: "Dừa sáp Cầu Kè",
                        diachics: [
                            {
                                tenhuyentp: "Châu Thành",
                                tenphuongxa: "Vĩnh Trường"
                            }
                        ],
                        sdtcs: ""
                    }
                ]
            }
        ],
        loaisanpham: [
            {
                phanloai: "Trái cây",
                khoiluong: "Tùy trái",
                cachbaoquan: "Bảo quản nơi khô ráo thoáng mát"
            }
        ],
        cachsudung: "Ăn trực tiếp từ trái hoặc bày ra đĩa",
        hansudung: [
            {
                nsx: "Ngày thu hoạch",
                hsd: "2 tuần"
            }
        ],
        diadiemban: [
            {
                tenquan: "Dừa sáp Cầu Kè",
                huyentp: "Châu Thành",
                phuongxa: "Vĩnh Trường",
                sdt: "",
                xephangcuakh: "Chưa có",
                nhanxetcuakh: "Chưa có"                
            }
        ],
        giaban: [
            {
                giatheochatluongsp: [
                    {
                        
                        loai1: 200000,
                        loai2: 150000,
                        loai3: 100000
                    }        
                ],
            }
        ]
    },
    {
        id: "07",
        tendacsan: "Tôm khô Vinh Kim",
        nguyenlieu: [
            {
                tennl: "Tôm",
                luong: "500g",
                gianl: 300000
            }
        ],
        huongvi: "Hương vị ngọt của tôm",
        mausac: "Đỏ",
        quytrinhsx: "Sấy và phơi khô tôm dưới ánh nắng",
        xuatxu: [
            {
                monandantoc: "Kinh",
                cososx: [
                    {
                        tencs: "Tôm khô Vinh Kim",
                        diachics: [
                            {
                                tenhuyentp: "Cầu Ngang",
                                tenphuongxa: "Vinh Kim"
                            }
                        ],
                        sdtcs: ""
                    }
                ]
            }
        ],
        loaisanpham: [
            {
                phanloai: "Thức ăn",
                khoiluong: "Tùy khối lượng mua",
                cachbaoquan: "Bảo quản nơi khô ráo thoáng mát"
            }
        ],
        cachsudung: "Dùng trựa tiếp hoặc bày ra đĩa",
        hansudung: [
            {
                nsx: "Ngày đóng gói",
                hsd: "1 tháng từ ngày đóng gói"
            }
        ],
        diadiemban: [
            {
                tenquan: "Tôm khô Vinh Kim",
                huyentp: "Cầu Ngang",
                phuongxa: "Vinh Kim",
                sdt: "",
                xephangcuakh: "Chưa có",
                nhanxetcuakh: "Chưa có"                
            }
        ],
        giaban: [
            {
                giatheohinhthucsp: [
                    {
                        donggoi500g: 600000,
                        banle: 1200000
                    }       
                ]
            }
        ]
    },
    {
        id: "08",
        tendacsan: "Nước mắn rươi",
        nguyenlieu: [
            {
                tennl: "Con rươi",
                luong: "1kg",
                gianl: 200000
            }
        ],
        huongvi: "Mặn mà vị nước mắm",
        mausac: "Nâu",
        quycach: ["Đĩa", "Chén"],
        quytrinhsx: "Ủa rươi và chờ lên men",
        xuatxu: [
            {
                cososx: [
                    {
                        tencs: "Long Vinh",
                        diachics: [
                            {
                                tenhuyentp: "Thị xã Duyên Hải",
                                tenphuongxa: "Phường 1"
                            }
                        ],
                        sdtcs: "0974 288 781",
                        website: "",
                        tieuchuan: "Tiêu chuẩn an toàn thực phẩm"
                    }
                ]
            }
        ],
        loaisanpham: [
            {
                phanloai: "Gia vị",
                mavach: "8936053440056",
                thetich: "500ml",
                cachbaoquan: "Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng trực tiếp",
            }
        ],
        cachsudung: "Dùng làm nước chấm, kho",
        hansudung: [
            {
                nsx: "Ngày đóng gói",
                hsd: "9 tháng từ NSX"
            }
        ],
        diadiemban: [
            {
                tenquan: "Long Vinh",
                huyentp: "Thị xã Duyên Hải",
                phuongxa: "Phường 1",
                sdt: "0974 288 781",
                xephangcuakh: "Chưa có",
                nhanxetcuakh: "Chưa có"                
            }
        ],
        giaban: [
            {
                giatheochatluongsp: [
                    {
                        loaidacbiet: 110000,
                        loaihthuong: 95000
                    }        
                ]
            }
        ]
    },
    {
        id: "09",
        tendacsan: "Rượu quách",
        nguyenlieu: [
            {
                tennl: "Trái quách"
            },
            {
                tennl: "Rượu nếp"
            },
            {
                tennl: "Đường phèn"
            }
        ],
        huongvi: "Thơm của rượu, hơi chua của quách",
        mausac: "Vàng",
        quycach: "Dùng ly",
        quytrinhsx: "Ủ và lên men rượu",
        xuatxu: [
            {
                cososx: [
                    {
                        tencs: "Trường ĐH Trà Vinh",
                        diachics: [
                            {
                                tenduong: "126 Nguyễn Thiện Thành",
                                tenhuyentp: "TP Trà Vinh",
                                tenphuongxa: "Phường 5"
                            }
                        ],
                        sdtcs: "0827070666",
                        website: "https://tvu.edu.vn",
                        tieuchuan: ["Chứng nhận an toàn thực phẩm"]
                    }
                ]
            }
        ],
        loaisanpham: [
            {
                phanloai: "Rượu",
                mavach: "",
                thetich: "500ml",
                cachbaoquan: "Nơi khô ráo, thoáng mát, tránh nhiệt độ cao, ánh nắng trực tiếp",
                nongdophantramcon: "35 độ"
            }
        ],
        cachsudung: "Uống liền",
        hansudung: [
            {
                nsx: "Ngày đóng chai",
                hsd: "Càng lâu càng ngon"
            }
        ],
        diadiemban: [
            {
                tenquan: "Trường ĐH Trà Vinh",
                duong: "126 Nguyễn Thiện Thành",
                huyentp: "TP Trà Vinh",
                phuongxa: "Phường 5",
                sdt: "0827070666",
                xephangcuakh: "Chưa có",
                nhanxetcuakh: "Chưa có"                
            }
        ],
        giaban: [
            {
                giasanpham: 100000
            }
        ]
    },
    {
        id: "10",
        tendacsan: "Rượu Xuân Thạnh",
        nguyenlieu: [
            {
                tennl: "Nếp"
            },
            {
                tennl: "Men rượu"
            },
            {
                tennl: "Nấm mốc"
            }
        ],
        huongvi: "Thơm nồng",
        mausac: "Đỏ",
        quycach: "Sử dụng ly",
        quytrinhsx: "Ủ và lên men rượu",
        xuatxu: [
            {
                cososx: [
                    {
                        tencs: "Công ty TNHH Hai Sang",
                        diachics: [
                            {
                                tenduong: "183, Hương lộ 10",
                                tenhuyentp: "Châu Thành",
                                tenphuongxa: "Hòa Thuận"
                            }
                        ],
                        sdtcs: "",
                        website: "",
                        tieuchuan: ["Chứng nhận thương hiệu độc quyền", "chứng nhận sản phẩm OCOP", "Sản phẩm công nghiệp nông thôn tiêu biểu"]
                    }
                ]
            }
        ],
        loaisanpham: [
            {
                phanloai: "Rượu",
                mavach: "",
                thetich: ["500ml", "650ml"],
                cachbaoquan: "Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp",
                nongdophantramcon: "20 - 60 độ"
            }
        ],
        cachsudung: "Uống liền",
        hansudung: [
            {
                nsx: "Ngày đóng chai",
                hsd: "Càng lâu càng ngon"
            }
        ],
        diadiemban: [
            {
                tenquan: "Công ty TNHH Hai Sang",
                duong: "183, Hương lộ 10",
                huyentp: "Châu Thành",
                phuongxa: "Hòa Thuận",
                sdt: "",
                xephangcuakh: "Chưa có",
                nhanxetcuakh: "Chưa có"                
            }
        ],
        giaban: [
            {
                giatheochatluongsp: [
                    {
                        loai1: 50000,
                        loại2: 40000,
                        loai3: 30000
                    }        
                ],
            }
        ]
    }
])