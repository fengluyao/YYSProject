const express = require('express');
const pool = require('../pool.js');

var router = express.Router();
//登录
router.post('/login',(req,res)=>{
	var str = req.body;
	var $uname = str.uname;
	var $upwd = str.upwd;
	if (!$uname)
	{
		res.send('用户名不能为空！');
		return;
	}
	if (!$upwd)
	{
		res.send('密码不能为空！');
		return;
	}
	var sql = `select * from user where uname=? and upwd=?;`
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0)
		{
			res.send('登陆成功！');
		}
		else
		{
			res.send('用户名或者密码错误！');
		}
	})
})
//用户列表
router.get('/list',(req,res)=>{
	var sql = `select * from user;`
	pool.query(sql,(err,result)=>{
		if (err)
		{
			throw err
		}
		res.send(result);
	})
})
//增加用户
router.post('/add',(req,res)=>{
	var str = req.body;
	var $uname = str.uname;
	var $upwd = str.upwd;
	var $user_name = str.user_name;
	var $gender = str.gender;
	if (!$uname)
	{
		res.send("用户名不能为空！");
		return;
	}
	if (!$upwd)
	{
		res.send("密码不能为空！");
		return;
	}
	var sql = `insert into user value(NULL,?,?,?,?);`
	pool.query(sql,[$uname,$upwd,$user_name,$gender],(err,result)=>{
		if (err)
		{
			throw err;
		}
		if (result.affectedRows>0)
		{
			res.send('注册成功！');
		}
		else{
			res.send('注册失败！');
		}
	})
})
//查询用户名是否存在
router.post('/check',(req,res)=>{
	var str = req.body;
	var $uname = str.uname;
	if (!$uname)
	{
		res.send('用户名不能为空！');
		return;
	}
	var sql = `select * from user where uname = ?`;
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if (result.length>0)
		{
			res.send('用户名已存在');
		}
		else
		{
			res.send('用户名可用')
		}
	})
})
//删除用户
router.post('/deleteUser',(req,res)=>{
	var str = parseInt(req.body.uid);
	//var $deleteUser = str.uid;
	//if (!$deleteUser)
	//{
	//	res.send('不能为空！')
	//}
	var sql = `delete from user where uid=?`;
	pool.query(sql,str,(err,result)=>{
		if (err)
		{
			throw err;
		}
		if (result.affectedRows>0)
		{
			res.send('删除成功！');
		}
		else{
			res.send('删除失败！');
		}
	})
})

//查询指定uid的用户
router.get('/search',(req,res)=>{
	var str = req.query.uid;
	var sql = `select * from user where uid=?`;
	pool.query(sql,str,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

//同步修改指定uid的用户
router.get('/update',(req,res)=>{
	var str = req.query;
	var $uid = str.uid;
	var $uname = str.uname;
	var $upwd = str.upwd;
	var $email = str.email;
	var $phone = str.phone;
	var $user_name = str.user_name;
	var $gender = str.gender;
	var sql = `update user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?`;
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if(err) throw err;
		res.send("<script>alert('修改成功');location.href='http://127.0.0.1:3000/02_list.html'</script>");
	})
})
//异步修改指定uid的用户
router.post('/change',(req,res)=>{
	var str = req.body;
	var $uid = str.uid;
	var $uname = str.uname;
	var $upwd = str.upwd;
	var $email = str.email;
	var $phone = str.phone;
	var $user_name = str.user_name;
	var $gender = str.gender;
	var sql = `update user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?`;
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");
	})
})
















module.exports = router;