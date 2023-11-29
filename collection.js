use DacSan;
db.Collection.insertMany([
    {
        id: "05",
        tendacsan: "Cháo cá khoai",
        nguyenlieu: [
            {
                tennl: "Gạo",
                luong: "200g",
                gianl: "3.000đ"
            },
            {
                tennl: "Cá khoai",
                luong: "200g",
                gianl: "15.000đ"
            },
            {
                tennl: "Rau sống",
                luong: "100g",
                gianl: "2.000đ"
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
                tenquan: "Biển Ba Động",
                huyentp: "Duyên Hải",
                phuongxa: "Trường Long Hòa",
                sdt: "",
                xephangcuakh: "Chưa có",
                nhanxetcuakh: "Chưa có"                
            }
        ],
        giaban: [
            {
                giamonan: "25.000đ"
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
                giatheochatluongsp: ["Loại 1: 200.000đ", "Loại 2: 150.000đ", "Loại 3: 100.000đ"],
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
                gianl: "300.000đ"
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
                giatheohinhthucsp: ["Đóng gói sẵn túi 500g: 600.000đ", "Bán lẻ: 1.200.000đ/Kg"]
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
                gianl: "200.000đ"
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
                giatheochatluongsp: ["Loại đặc biệt: 110.000đ", "Loại thường: 95.000đ"]
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
                giasanpham: "100.000đ"
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
                giatheochatluongsp: ["Rươu XT đế (60 độ): 50.000đ", "Rượu XT lão tửu (20-29 độ): 30.000đ", "Rươu chuối hột XT (29-40 độ: 40.000đ"],
            }
        ]
    }
])