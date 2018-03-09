<?php

function conn(){
    $conn = mysqli_connect("localhost","WMBOMBI-10-N.ogh.co.za","Password101","firmfaith")or die(mysqli_error());
    return $conn;
}

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


$app = new \Slim\App;

//Get all albums

$app->get('/api/albums', function(Request $request, Response $response){
	 $sql = "SELECT
				*
				from albums";
	 
	 try{
		 //Get database object
		 $db = new db();
		 //Connect
		 $db = $db->connect();
		 
		 $stmt = $db->query($sql);
		 $engagements = $stmt->fetchAll(PDO::FETCH_OBJ);
		 $db = null;
		 echo json_encode($engagements);
	 }
	 catch(PDOException $e){
		 echo '{"error": {"text": '.$e->getMessage().'}}';
	 }
});


//Get all notices

$app->get('/api/notices', function(Request $request, Response $response){
	 $sql = "SELECT
				*
				from notices";
	 
	 try{
		 //Get database object
		 $db = new db();
		 //Connect
		 $db = $db->connect();
		 
		 $stmt = $db->query($sql);
		 $engagements = $stmt->fetchAll(PDO::FETCH_OBJ);
		 $db = null;
		 echo json_encode($engagements);
	 }
	 catch(PDOException $e){
		 echo '{"error": {"text": '.$e->getMessage().'}}';
	 }
});



//Get all members

$app->get('/api/members', function(Request $request, Response $response){
	 $sql = "SELECT
				*
				from members";
	 
	 try{
		 //Get database object
		 $db = new db();
		 //Connect
		 $db = $db->connect();
		 
		 $stmt = $db->query($sql);
		 $members = $stmt->fetchAll(PDO::FETCH_OBJ);
		 $db = null;
		 echo json_encode($members);
	 }
	 catch(PDOException $e){
		 echo '{"error": {"text": '.$e->getMessage().'}}';
	 }
});



//Login single user

$app->get('/api/user/{contact}/{password}', function(Request $request, Response $response){
	
	 $contact = $request->getAttribute('contact');
	 $password = $request->getAttribute('password');
	
	 $sql = "select * from users where contact = '$contact' and password ='$password'";
	 $qry = mysqli_query(conn(), $sql);
	 $data = mysqli_fetch_array($qry);
	 $id = $data['id'];
	 $name = $data['name'];
	 $contact = $data['contact'];
	 $password = $data['password'];

	 try{
		 //Get database object
		 $db = new db();
		 //Connect
		 $db = $db->connect();
		 
		 $stmt = $db->query($sql);
		 $user = $stmt->fetchAll(PDO::FETCH_OBJ);
		 $db = null;

		 if(count($user)==1){
			return $response->withJSON(
				['id' => $id, 'name' => $name, 'contact' => $contact, 'password' => $password],
				200,
				JSON_UNESCAPED_UNICODE
			);
		 //echo json_encode($user);
		 }
		 else{
			echo json_encode("Login Failed");
		 }
	 }
	 catch(PDOException $e){
		 echo '{"error": {"text": '.$e->getMessage().'}}';
	 }
});


//Add member

$app->post('/api/addMember', function(Request $request, Response $response){
	 
	 $name = $request->getParam('name');
	 $bio = $request->getParam('bio');
	 $imageUrl = $request->getParam('imageUrl');
	 $position = $request->getParam('position');
	 $joined = $request->getParam('joined');
	 $Profession = $request->getParam('Profession');
	 
	 $sql = "insert into members (name, bio, imageUrl, position, joined, Profession) 
	 values(:name, :bio, :imageUrl, :position, :joined, :Profession)";
	 
	 try{
		 //Get database object
		 $db = new db();
		 //Connect
		 $db = $db->connect();
		 
		 $stmt = $db->prepare($sql);
		 
		 $stmt->bindParam(':name', $name);
		 $stmt->bindParam(':bio', $bio);
		 $stmt->bindParam(':imageUrl', $imageUrl);
		 $stmt->bindParam(':position', $position);
		 $stmt->bindParam(':joined', $joined);
		 $stmt->bindParam(':Profession', $Profession);
		 
		 $stmt->execute();
		 
		 echo json_encode('Member Registered Successfully');
	 }
	 catch(PDOException $e){
		 echo json_encode('{"error": {"text": '.$e->getMessage().'}}');
	 }
});


//Add user

$app->post('/api/register', function(Request $request, Response $response){
	 
	 $name = $request->getParam('username');
	 $contact = $request->getParam('contact');
	 $Upassword = $request->getParam('password');
	 
	 $sql = "insert into users (name, contact, password) 
	 values(:name, :contact, :password)";
	 
	 try{
		 //Get database object
		 $db = new db();
		 //Connect
		 $db = $db->connect();
		 
		 $stmt = $db->prepare($sql);
		 
		 $stmt->bindParam(':name', $name);
		 $stmt->bindParam(':contact', $contact);
		 $stmt->bindParam(':password', $Upassword);
		 
		 $stmt->execute();
		 
		 echo json_encode('Registered Successfully');
	 }
	 catch(PDOException $e){
		 echo json_encode('{"error": {"text": '.$e->getMessage().'}}');
	 }
});


//Update engagement

$app->put('/api/engagements/update/{id}', function(Request $request, Response $response){
	
	 $id = $request->getAttribute('id');
	 
	 
	 $date_resigned = $request->getParam('date_resigned');
	 
	 $sql = "update engagements set date_resigned = :date_resigned where id = '$id'";
	 
	 try{
		 //Get database object
		 $db = new db();
		 //Connect
		 $db = $db->connect();
		 
		 $stmt = $db->prepare($sql);
		 
		 $stmt->bindParam(':date_resigned', $date_resigned);
		 
		 $stmt->execute();
		 
		 echo '{"notice": {"Text": "Engagement Updated"}}';
	 }
	 catch(PDOException $e){
		 echo '{"error": {"text": '.$e->getMessage().'}}';
	 }
});


//Delete single customer

$app->delete('/api/engagements/delete/{id}', function(Request $request, Response $response){
	
	 $id = $request->getAttribute('id');
	
	 $sql = "delete from users where id = $id";
	 
	 try{
		 //Get database object
		 $db = new db();
		 //Connect
		 $db = $db->connect();
		 
		 $stmt = $db->prepare($sql);
		 $stmt->execute();
		 $db = null;
		 
		 echo '{"notice": {"Text": "Customer deleted"}}';
	 }
	 catch(PDOException $e){
		 echo '{"error": {"text": '.$e->getMessage().'}}';
	 }
});

?>
