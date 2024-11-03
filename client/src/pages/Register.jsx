import { useContext } from "react";
import { Alert,Button,Form,Row,Col,Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Register = () => {

    const{registerInfo,updatesetregisterInfo ,registerUser,registerError,isRegisterLoading} = useContext(AuthContext)
    return ( <>
        <Form onSubmit={registerUser}>
            <Row style={{
                height: '100vh',
                justifyContent:'center',
                paddingTop:"10%" 
            }}>
                <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Register</h2>  
                            
                            <Form.Control type="text" placeholder="Name" onChange={(e)=>updatesetregisterInfo({...registerInfo,name:e.target.value})}/>
                            <Form.Control type="email" placeholder="Email" onChange={(e)=>updatesetregisterInfo({...registerInfo,email:e.target.value})}/>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>updatesetregisterInfo({...registerInfo,password:e.target.value})}/>
                            <Button variant="primary" type="submit">
                                {isRegisterLoading?"Creating you account":"Register"}
                            </Button>

                            {
                                registerError?.error && <Alert variant="danger"><p>{registerError?.message}</p></Alert>

                            }
                        </Stack>
                </Col>
            </Row>
        </Form>
    
    </> );
}
 
export default Register;