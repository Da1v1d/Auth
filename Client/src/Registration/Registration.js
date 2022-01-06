import "./styles/registration.css"
import '../main.css'
import {Button, TextField, Paper} from '@mui/material';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { showErrorMessage , setLocalStorage } from "../logic";
import { routeUrls } from "../Routes/routeUrls";
import { useDispatch, useSelector} from 'react-redux';
import { addAccount, createUser } from "../store/user/user-actions";   
import { useEffect } from "react";
import { useUserData } from "../customHooks/useUserData";
import * as api from '../api/api'
import FormComponent from "../components/Form/FormComponent";
import BaseTextField from '../components/Input/BaseTextField/BaseTextField'
import { withRouter } from "react-router-dom";


const  Registration= ({history})=>{
    const dispatch=useDispatch()
    const {
        register, 
        handleSubmit, 
        getValues, 
        formState: {errors , isDirty, isValid}
        } = useForm({ mode:'onChange' })

    const onSubmit =  (data) => {
        const formData = {
            login:data.login,
            password:data.password
        }
        api.createUser(formData)
            .then(()=>history.push(routeUrls.Login))
    }

    return(
        <FormComponent>
                <div className="form-window">
                    <form style={{width:'300px' ,}} onSubmit={handleSubmit(onSubmit)}  >
                        <h2 style={{textAlign:'center', color:'#17081d'}}><p>Registration</p></h2>
                        <div className="input">
                            <BaseTextField 
                                {...register('login',
                                {required:'login field is required',
                                minLength:{value:4, message:'less then 4'},
                                maxLength:{value:16 , message: 'more than 16'}})
                                }
                                label='login'
                                error={errors.login}
                                helperText={showErrorMessage(errors.login, errors.login?.message)}
                            />
                        </div>
                        <div className="input">
                              <BaseTextField 
                                {...register('password',
                                    {required:'password field is required',
                                    minLength:{value:4, message:'less then 4'},
                                    maxLength:{value:16 , message: 'more than 16'}})
                                }
                                label='password'
                                type='password'
                                error={errors.password}
                                helperText={showErrorMessage(errors.password, errors.password?.message)}
                            />
                        </div>
                        <div className="input">
                             <BaseTextField 
                                 {...register('confirm_password',
                                 {required:'confirm password field is required',
                                 minLength:{value:4, message:'less then 4'},
                                 maxLength:{value:16 , message: 'more than 16'},
                                 validate:value => 
                                     value===getValues('password') || 'wrong password'
                                 })}
                                label='password'
                                type='password'
                                error={errors.confirm_password}
                                helperText={showErrorMessage(errors.confirm_password, errors.confirm_password?.message)}
                            />
                            
                        </div>

                        <div className="confirmreg">
                            <Button  
                                sx={{
                                    backgroundColor:'#171010',
                                    '&:hover':{
                                        backgroundColor:'#282430',
                                    }
                                }}
                                fullWidth
                                type="submit" 
                                variant="contained" 
                                disabled={!isValid || !isDirty} 
                            >
                                Create Account
                            </Button>
                            <Button 
                                sx={{
                                    backgroundColor:'#423F3E',
                                    margin:'7px',
                                    '&:hover':{
                                        backgroundColor:'#535252',
                                    }
                                }}
                                fullWidth
                                // color='error'
                                variant="contained" 
                                
                                onClick={()=>history.push(routeUrls.Main)}
                            > 
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
                </FormComponent>
    )
}


export default withRouter(Registration)