import { render ,screen } from "@testing-library/react";
//import Signin from "./Signin";
import Vamsi from "./Vamsi";
//describe('vamsi expense tracker testing',()=>{
  test('Signin page testing',()=>{
    render(<Vamsi/>);
    const findele=screen.getByText('Sign-in Page');
    expect(findele).toBeInTheDocument();
  });
//});