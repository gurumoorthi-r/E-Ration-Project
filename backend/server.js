import express from "express";
import mysql from 'mysql2';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let db;
function handleDisconnect() {
    db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'balaji@06',
        database: 'e_ration'
    });

    db.connect((err) => {
        if (err) {
            console.error("Error connecting to MySQL:", err);
            // Attempt to reconnect after 2 seconds
        } else {
            console.log("Connected to MySQL database");
        }
    });

    db.on("error", (err) => {
        console.error("MySQL connection error:", err);
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            handleDisconnect(); // Reconnect if the connection is lost
        } else {
            throw err;
        }
    });
}

handleDisconnect();
app.options('*', cors());
// app.post('/login',(request,response)=>
// {
//     const sql = 'SELECT * FROM Users WHERE `Username` = ? AND Password_= ? ;';
//     const user = request.body.Username;
//     const pass = request.body.Password_;


//     db.query(sql,[user,pass],(err,result)=>
//     {
//         if(err)
//         return response.json(err);
//     return response.json(result)
//     })
// });


// app.post('/register',(request,response)=>
// {
//     const sql = 'INSERT INTO Registration VALUES(?) ;';
//     const id = request.body.Eid;
//     const fname = request.body.First_name;
//     const lname = request.body.Last_name;
//     const gender = request.body.Gender;
//     const dob = request.body.Date_of_Birth;
//     const phno = request.body.Phone_Number;
//     const address = request.body.Address;
//     const city = request.body.City;
//     const pincode = request.body.Pincode;
//     const desig = request.body.Designation;
//     const email = request.body.Email;
//     const pass = request.body.Pass_word;
//     const emer = request.body.Emergency_no;
//     const Domain = request.body.Domain;
//     const values=[id,fname,lname,gender,dob,phno,address,city,pincode,desig,email,pass,emer,Domain]

//     db.query(sql,[values],(err,result)=>
//     {
//         if(err)
//         return response.json(err);
//     return response.json(result)
//     })
// });


//Login credentials verification
app.post('/login-customer', (request, response) => {

    const sql = 'SELECT * FROM Customer WHERE Ration_ID = ?;'
    const ID = request.body.Ration_ID;

    db.query(sql, [ID], (result, err) => {
        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});
app.post('/login-manager', (request, response) => {

    const sql = 'select mgr_id From shop_manager WHERE mgr_id in(SELECT mgr_id from shop where Shop_id= ?)and pass_word =?;'
    const { Shop_id, pass_word } = request.body;

    db.query(sql, [Shop_id, pass_word], (result, err) => {
        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});



app.get('/Customer/fetchFamily/:RID', (request, response) => {

    const sql = 'SELECT * FROM family WHERE  Ration_ID =? ; '
    const rid = request.params.RID


    db.query(sql, [rid], (result, err) => {


        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});

app.get('/Customer/fetchShop/:SID', (request, response) => {

    const sql = 'SELECT * FROM shop WHERE  Shop_id =? ; '
    const sid = request.params.SID

    console.log(sid)
    db.query(sql, [sid], (result, err) => {


        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});


app.get('/Customer/fetchManager/:MID', (request, response) => {

    const sql = 'SELECT * FROM shop_manager WHERE  mgr_id =? ; '
    const mid = request.params.MID


    db.query(sql, [mid], (result, err) => {


        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});


app.get('/Customer/IndividualOrder/:order_id', (request, response) => {

    const sql = 'SELECT * FROM order_item WHERE  Order_ID =? ; '
    const oid = request.params.order_id

    console.log(oid)



    db.query(sql, [oid], (result, err) => {

        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});
//to display the updated stock details


//to display the ordered_item
app.get('/Customer/Order_item_History/:order_id', (request, response) => {

    const sql = 'select item_name,o.quantity,o.quantity*i.Price as price_history from order_item as o join item as i on o.Item_id=i.Item_id  where order_id = ?; '
    const oid = request.params.order_id

    console.log(oid)



    db.query(sql, [oid], (result, err) => {

        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});




app.get('/Customer/fetchOrders/:RID', (request, response) => {

    const sql = 'SELECT * FROM orderinfo WHERE  Ration_ID =? ; '
    const rid = request.params.RID

   


    db.query(sql, [rid], (result, err) => {

        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});
app.get('/Customer/FetchTodayProducts/:sid', (request, response) => {

    const sql = 'SELECT * FROM daily_stock WHERE  Shop_id =? ; '
    const sid = request.params.sid




    db.query(sql, [sid], (result, err) => {

        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});


app.get('/Customer/fetchItemName/:Item_id', (request, response) => {

    const sql = 'SELECT Item_Name,Price FROM item WHERE  Item_id =? ; '
    const pid = request.params.Item_id


    db.query(sql, [pid], (result, err) => {

        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});
//storing order info
app.post('/Customer/deliveryInfo', (request, response) => {

    const sql = 'INSERT INTO OrderInfo VALUES(?);'
    const ID = request.body.Ration_ID;
    const OrderId = request.body.Order_ID;
    const mode = request.body.PaymentMode;
    const dates = request.body.OrderDate;
    const values = [ID, OrderId, mode, dates]
    db.query(sql, [values], (result, err) => {
        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});

app.post('/Customer/OrderDetails', async (request, response) => {
    const items = request.body.items;
    console.log("Received items:", items); // Log the received items

    const sql = 'INSERT INTO Order_item (Order_ID, Item_id, quantity) VALUES (?, ?, ?)';

    const promises = items.map(item => {
        return new Promise((resolve, reject) => {
            db.query(sql, [item.Order_ID, item.Item_id, item.quantity], (err, result) => {
                if (err) {
                    console.error("Error inserting item:", item, err); // Log the error
                    return reject(err);
                }
                resolve(result);
            });
        });
    });

    try {
        await Promise.all(promises);
        response.status(200).json({ message: 'Order items inserted successfully' });
    } catch (err) {
        console.error("Error in promises:", err); // Log the error
        response.status(500).json(err);
    }
});



app.get('/featuredProducts', (request, response) => {

    const sql = 'SELECT * FROM  AllProducts;'

    db.query(sql, (result, err) => {
        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});

app.get('/MyProfile/:Ration_ID', (request, response) => {

    const sql = 'SELECT * FROM Customer WHERE Ration_ID = ?; '
    const val = request.params.Ration_ID

    db.query(sql, val, (result, err) => {
        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});

//to store today's products



app.get('/ShopManager/TodayProducts/:sid', (request, response) => {

    const sql = 'SELECT * FROM daily_stock WHERE  Shop_id =? ; '
    const Shop_id = request.params.sid


    db.query(sql, [Shop_id], (result, err) => {

        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});
app.post('/ShopManager/getUpdatedStock', (request, response) => {

    const sql = 'select Item_id,quantity from updated_stock where Updated_date = ? and   Shop_id = ?';
    const dates = request.body.givenDate
    const sid = request.body.Shop_id

    console.log(request.body)



    db.query(sql, [dates,sid], (result, err) => {

        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});
app.post('/ShopManager/search/Customer', (request, response) => {

    const sql = 'SELECT * FROM Customer WHERE Ration_ID=? AND Shop_id =? ; '
    const { Shop_id, Ration_ID } = request.body


    db.query(sql, [Ration_ID, Shop_id], (result, err) => {

        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});


app.post('/ShopManager/update/:Ration_ID', (request, response) => {
    const Ration_ID = request.params.Ration_ID;
    const updatedField = Object.keys(request.body)[0];
    const updatedValue = request.body[updatedField];

    const sql = `UPDATE Customer SET ${updatedField} = ? WHERE Ration_ID = ?`;


    db.query(sql, [updatedValue, Ration_ID], (err, result) => {

        if (err) {
            console.error('Error updating data:', err);
            return response.status(500).json(err);
        }

        return response.json(result);
    });
});



app.post('/ShopManager/AllCustomers', (req, res) => {
    const sid = req.body.Shop_id;
    const rationType = req.body.Ration_Type;

    let sql = 'SELECT * FROM Customer WHERE Shop_id = ?';
    const values = [sid];

    if (rationType && rationType !== 'All') {
        sql += ' AND Ration_Type = ?';
        values.push(rationType);
    }

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.json(result);
    });
});
app.post('/ShopManager/AllCustomersCount', (req, res) => {
    const sid = req.body.Shop_id;
    const rationType = req.body.Ration_Type;

    let sql = 'SELECT count(*) as count FROM Customer WHERE Shop_id = ? ';
    const values = [sid];

    if (rationType && rationType !== 'All') {
        sql += ' AND Ration_Type = ?';
        values.push(rationType);
    }

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.json(result);
    });
});



app.post('/ShopManager/AddCustomer', (req, res) => {
    const {
        Ration_ID,
        First_Name,
        Last_Name,
        Gender,
        Age,
        Date_of_Birth,
        Address,
        City,
        Pincode,
        Phone_no,
        Pass_word,
        Family_Size,
        Ration_Type,
        Shop_id
    } = req.body;

    const values = [Ration_ID, First_Name, Last_Name, Gender, Age, Date_of_Birth, Address, City, Pincode, Phone_no, Pass_word, Family_Size, Ration_Type, Shop_id];

    console.log(values);

    const sql = 'INSERT INTO CUSTOMER (Ration_ID, First_Name, Last_Name, Gender, Age, Date_of_Birth, Address, City, Pincode, Phone_no, Pass_word, Family_Size, Ration_Type, Shop_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        return res.json(result);
    });
});
app.post('/ShopManager/AddFamily', (req, res) => {
    const familyMembers = req.body;

    const sql = 'INSERT INTO Family (Ration_ID, name, Age, Date_of_Birth, gender, Relationship) VALUES ?';

    const values = familyMembers.map(member => [member.Ration_ID, member.name, member.Age || null, member.Date_of_Birth, member.gender, member.Relationship]);

    db.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        return res.json(result);
    });
});

app.get('/ShopManager/AllCustomer/sort/:orderBy', (req, res) => {
    const order = req.params.orderBy;
    let sql = 'SELECT * FROM Customer ORDER BY First_Name ';

    // Append the correct SQL for ordering
    if (order && (order === 'DESC')) {
        sql += order.toUpperCase();
    } else {
        sql += 'ASC'; // Default order
    }


    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.json(result);
    });
});


app.post('/ShopManager/Check', (request, response) => {

    const sql = 'SELECT * FROM  updated_stock WHERE Updated_date = ? AND Shop_id = ?; '
    const val1 = request.body.todayDate;
    const val2 = request.body.Shop_id;


    db.query(sql, [val1, val2], (result, err) => {
        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});


app.get('/ShopManager/getAllProducts', (request, response) => {

    const sql = 'SELECT * FROM  item; '


    db.query(sql, (result, err) => {
        if (err)
            return response.json(err)
        return response.json(result)
    }
    )
});



app.post('/ShopManager/TodayProducts', (request, response) => {
    const sql = 'UPDATE daily_stock SET quantity = ? WHERE Item_id = ? AND Shop_id = ?;';
    const products = request.body; // Assuming the request body is an array of products

    // Function to execute the query for each product
    const updateProduct = (product, callback) => {
        const { quantity, Item_id, Shop_id } = product;
        db.query(sql, [quantity, Item_id, Shop_id], callback);
    };

    // Use a counter to keep track of completed queries
    let completed = 0;
    let errors = [];

    products.forEach((product) => {
        updateProduct(product, (err, result) => {
            if (err) {
                errors.push(err);
            }
            completed++;
            if (completed === products.length) {
                if (errors.length > 0) {
                    console.error('Error updating data:', errors);
                    return response.status(500).json({ error: 'Failed to update data', details: errors });
                }
                return response.json({ success: true });
            }
        });
    });
});

app.post('/ShopManager/UpdateDailyProducts/:mysqlDate', (request, response) => {
    const mysqlDate = request.params.mysqlDate;
    const products = request.body; // Assuming the request body is an array of products

    // Construct the SQL query and values
    const sql = 'INSERT INTO updated_stock (Updated_date, Shop_id, Item_id, quantity) VALUES ?';
    const values = products.map(product => [mysqlDate, product.Shop_id, product.Item_id, product.quantity]);

    // Execute the query
    db.query(sql, [values], (err, result) => {
        if (err) {
            return response.status(500).json({ error: err });
        }
        return response.status(200).json({ result: result });
    });
});

// Insert or update daily products

app.listen(4000, () => {
    console.log('Listening to port 4000')
})