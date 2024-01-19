use DacSan

//Xóa Collection
db.Collection_2.drop()

//Xóa Document
db.Collection.remove(
    {id : "11"},
    {
        justOne: true
    }
)

//Tìm kiếm đơn điều kiện
//Tìm những lần lượt những loại sản phẩm có phân loại là thức ăn, Trái cây; có cơ sở sản xuất là Trường ĐH Trà Vinh;
//có giá món ăn là 25000, 35000; những món ăn có giá món ăn nhỏ hơn 40000
db.Collection.find({"loaisanpham.phanloai": "Thức ăn"}).pretty()
db.Collection.find({"xuatxu.cososx.tencs": "Trường ĐH Trà Vinh"}).pretty()
db.Collection.find({"loaisanpham.phanloai": "Trái cây"}).pretty()
db.Collection.find({"giaban.giamonan": 25000}).pretty()
db.Collection.find({"giaban.giamonan": 35000}).pretty()
db.Collection.find({"giaban.giamonan": {$lt: 40000} }).pretty()

//Tìm kiếm đa điều kiện
db.Collection.find({"loaisanpham.phanloai": "Thức ăn", "nguyenlieu.tennl": "Bún"}).pretty()
db.Collection.find(
    {   "xuatxu.cososx.tencs": "Trường ĐH Trà Vinh",
        $or: [
            {"loaisanpham.phanloai": "Trái cây"}, {"loaisanpham.phanloai": "Rượu"}
        ]
    }
)
db.Collection.find(
    {$or: [{"loaisanpham.phanloai": "Trái cây"},{"giaban.giamonan": {$lte: 25000}}]}
)

//Thêm một document vào collection
db.Collection.insertOne(
    {
    	id: "11",
    	tendacsan: "Bánh tét Trà Cuôn"
    }
)

//Cập nhật field "giamonan" vào document có id: "11"
db.Collection.updateOne(
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

db.Collection.find()