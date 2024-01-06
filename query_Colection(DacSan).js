use DacSan

//Tìm kiếm đơn điều kiện
db.Collection.find({"loaisanpham.phanloai": "Thức ăn"}).pretty()
db.Collection.find({"xuatxu.cososx.tencs": "Trường ĐH Trà Vinh"}).pretty()
db.Collection.find({"loaisanpham.phanloai": "Trái cây"}).pretty()
db.Collection.find({"giaban.giamonan": 25000}).pretty()
db.Collection.find({"giaban.giamonan": 35000}).pretty()

//Tìm kiếm đa điều kiện
db.Collection.find({"loaisanpham.phanloai": "Thức ăn", "nguyenlieu.tennl": "Bún"}).pretty()
db.Collection.find(
    {   "xuatxu.cososx.tencs": "Trường ĐH Trà Vinh",
        $or: [
            {"loaisanpham.phanloai": "Trái cây"}, {"loaisanpham.phanloai": "Rượu"}
        ]
    }
)

//Thêm một document vào collection
db.Collection.insertOne(
    {
    	id: "11",
    	tendacsan: "Bánh tét Trà Cuôn"
    }
)

//Cập nhật field "giamonan" vào document có id: "11"
db.Collection.update(
    {id: "11"},
    {
    	$set: {
    	    giaban: [
    	        {
    			    giamonan: 70000
    		    }
    		]   
        }    	
    },
    {
        upsert: false,
        multi: false
    }    
)

db.Collection.find({""})