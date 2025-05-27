const Product=require("../model/product");

const getAllProduct=async(req,res)=>{

    const {company,name,featured,sort,select} =req.query;
    const queryObject ={};

    let apidata=Product.find(queryObject);

    if(company){
        queryObject.company=company;
    }

    if(name){
        queryObject.name={$regex:name ,$options:"i"};
    }
    if(featured){
        queryObject.featured=featured;
    }

    // sorting
    if(sort){
        let sortFix=sort.replace(","," ");
        
        apidata=apidata.sort(sortFix);
    }

    // selecting
    if(select){
        let selectfix=select.replace(","," ");
        apidata=apidata.select(selectfix);
    }

    let page= Number(req.query.page)|| 1;
    let limit =Number(req.query.limit) ||3;

    let skip=(page-1)*limit;

    apidata=apidata.skip(skip).limit(limit);
    // const myData=await apidata.sort(sort);
    const myData1=await apidata.select(select);

    res.status(200).json({myData1,nbHits:myData1.length});
}

const getAllProductTesting=async(req,res)=>{
    const queryObject ={};
    const myData1=await Product.find(queryObject);
    res.status(200).json(myData1);
}


module.exports={getAllProduct,getAllProductTesting};