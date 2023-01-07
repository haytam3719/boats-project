import React from "react";
import styles from "./Header.module.css"
import { SetSideBar } from "./sidebar";
class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={click:"false"};
    }
    
    SetNav=()=>{
    return (<nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="" class="flex items-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAh1BMVEX///8AAADLy8v5+fny8vLn5+f29vbOzs7BwcHs7Ozv7+/h4eHS0tK2trbGxsZ+fn6Ojo6mpqawsLBwcHCgoKDZ2dmVlZVoaGiAgIBfX19ycnJhYWE6OjohISFZWVmGhoZLS0tDQ0M0NDQ+Pj4ZGRkrKysRERGSkpJRUVEcHBwuLi4lJSULCwtsagHMAAAM6ElEQVR4nN1d2WKyOhAurqigbIJbi0tbbf++//Odal0yIXsGgue7q404A8nsM7y81IC8iMJ5HRduC3zvjM0iHLmmpC54N3yu/p9MRh6Bf+XUNT3o6HsUlsnANU242NIcet4p7LqmChFhlcFfFP+jvcpk8BdR3zVlSJjxOPRO/4/HOOcy6HnvsWvqMPAq4NDz8ucXOJmQQc87PjuLIwmDv0/RNYm6oFQ5QxXSSNwQaoighH8ncga972fyOSIP/j1QYNDzVs9zFD+8AH7wpsTh0+zTX6Eyg5+wzbUqts/hUJ2PHPykq8ig5z2F4k9/Ce3Aj5bKHG7HbojWwZnOFfxIdY+eEbqhWh2TC5nwMzU5esWKfd3W4M8yoxwFRTn6h9d2O1Jb1mNQ0fUEfDekK+G2G+GnYz0GvcgN8SrwryRScvSgyeHSDfUKSK8UUntU5jNVsG9r8O1OIfx4osug57VT1Azv9FF79Eufw4D9E25R3smj7NGFPoP0PWoFCPLgPzoGDLZQXZAhNGqHmTDYPrutJIijdJm6wd3mZ/hJ0PYK/6VpzLSTwwDQBuV8Jc+kiFZJGigqKe/1x5DDNoWjIGVv8J8miuKC9mh8WhXA//pM6lXQGqttRREGj4+W1wvw4YifCmjCKEWxM+awJb5FJfJC3fmIRbsaSvYvNoxqXAKGyIystSvaYNIwvHZIlnp4lIGJI64IMHxayqPYWTD47oYpEgyPj7LWcgsG3QsaZi4eJhtsDqH7sD6zmgLxEDo/hkyaqEO4t2LwnxvGrmCnHyiajM3RP8zYP90MOIn4Hlikk4RhYeiIuRe+twf9VXnBhRifjrh74ZthlDlq6hPe4G6T8ijawWVrSwadxUr5vh5cpx3Bp+FKkp64FMGAw5C7ThVuqqIEASVof5g7vXc4qcQQeHpUlumTv1IRb2wS6oWAHsrpTQVLFeGgjFaov2HEKLZn0IGcEZYTQsFuL2UcuBXi5Ca6lPG8psv2xCY0JWXeERhsukRBTA11ZMySTBSajQTL0kZwtVXY4oZmTdIPCTXQljEP4JNoUtuL+iIugGELg3ILBpp8hIWMGCoqjcKg11zVZU9Kywl+4RuFwUVjDMqFxg/8AoKxdkZjglSBFhiXsXYJ/9CULlQRioH2N1TQEIM7BVJguwCOGG3KIlWithYx2lCEjU5aM0G5qLaRtRua8AvVfIMv+CUUa9SrqJ9aoCgR4ZdK+RfU0EB5iWKEBaaFEJz6P9SfuFeV+DB+b5clJFE7gwqdjxdk4FumRWtV1F2op6zRKNsfjcG6xQy/Q54CpSfEbdk6qNct1IgfwS+q7mw5MjZlSNCwmuEXlZ+8FPUWsWkQAjUWSljmD3XWkup4BTD1bJvIJlCnKtxp0AHDMniKsE5VKI01kYBJPTxFWGfGV8mPuAEqQpTw/RW17VF5rIkEpZERGfxhk2cPPUlIiXNZqFgHdclRTTLgl7E8wjOO9fCnK+lhkE/r/ErwXQ+DG00yoEeIqOlrskcD+e9CwAYDwzYmNmoZ8aFdsAQ1PVZo9II6KoH1a+qg2a9lJEhRA4P6YSOojzFNmVqMGX0iCvB9y9JmCvjFXQZhsfpMGc87oDNoEHKgKhHsC7pIYGfSpiZEwEvsUBnE7hE1CqnAS2hNX5ECOVVolv6C9gamrVapKraFGXHQVrNotGMBlT9DbxUqK6Q0NvviljCkDUbZUY1R5PCoIQ3QJEY1Rj1vjcifKWkwo45RNUoCkUHd0UU3QFGOa21j1j0ZUwbjarjWNma63rhMKQWXwQwcnoFmb+sFC0nADBquO4EoZcyDKRt4IUTmzvhik6sPNBIMRlgJgeRQ2KSF4JVwaiofQLJlTHXEGXhXYgGncM1Ke8FNxO9WMwNOfaxVKSvUxdI6aE1sMfgz1xFnQIcQL01/BQaDdgF36BCi1avdgGGs2VEA5dwRhy3e5Y1g6eLAyBCyx4uSobAs36nV48VIZduWWkMGEStJ/mBvjdrKvVpdeoR5Otb2P7Q1jILHQtg2TVqX6UKXTTuDKoVtovefLQGwWACreeIBy/i9/R2HQRl2zGL/tl6VeRYnoe9Ph8EFw05n6odhEsdZdlysiuVpw+yStZxLZm87Qjl+i1m8b9azKA79eb/H+WUOxv35NIyj2dv3D+sG6sLODGUw+LLIw44uUxwM+p0wX9kFfxEMj+Ya/kyAkLB0PTRMCLsCz1OZDFv+MhfTOT6fRTZ9glecGImYz3XWwZEhDUBXxJwiv+VbkoKGFfO+Sto0VFkNqlbMIfKf4cBVoZKU3+bD53l1GQ0Zc7vc4UQ+BAid7+9y+gRPrtsbj0bc48OPxRQtfbv1oD8J/CTJolm63n3ceqJ500k5ydhD3h5p2e2O5kM/zo6z4m3D6/HmHiOWEkxD1zq8O+oHfvj7jJaHbyVDmW8K0z0OH5Gzd830JkEYZ7PipF/uyH+fGowtnOKm3xzQ7U06v08qPenW+QMISkqJqrIibG5W1GjuJ/lsvUcqLBWcqNuSVRODFbqTYZIt1tjZUVHi4s9MW9X7WpJLzGF2shvhLIAomvFrps1q46438eNFURtfNwij+rU8u+58GpdLzBY0EZocfDwahlFhJQ4N0Mh89f4wKdcYUw31UfPbiwdBeFw3tRlZKOQ0GqI/jWc7h5z9oZYO2P40S7ErmUyB7BH0hm14agQQ25omYXTCmkaFBqSGinkya1r0K8I+BtZe3s6wSxn2wxLdKMaFee9rd5hhdsLXBbNo2NiPWv7gbjCYaDX2Z9a1CI1B14QZ+CXerKkmoBV9CI471/TqQl2C9kLs6twmoPrOhkm2c02qGZRU/Pzo0s+xgkLFw+TYOstSHXsZd72s9khQrZBEKfxnMFNEENYc9VCH2biBgL050hhzp+CrwCHe2EiH4Hu56N0obsCXMK4pw4HgTRS4EzRcQeAFonejuIAokI1fKN48xG/VelrT8wFxSdLz71GJl8R4W/eTQVYi8exyVPqyIvSWqYYhj8O4ptAOCqkW9M7TRiHnz/pNx06hlKx+Yl/3VYW/Gvr6GoNiKVZbcs/aUE12oncPNwXlbLxrQg2h3oWtaJDul8VqsVipBTl+Nqe30/agFmndrdPfK6dKmePXt2I1WxXrnc4rimQX/UyTgKi/DIXpwm0UTojFU+GYlW3kE/GGQSzM1S2zjmFJvFDZb+NqyINn4P2LGM5Lh/MYfxadqi/Om5fwz64insvdJuZUzjKM9J8jL/jDeoglh+AxK8Ie2ZbXcU6h6Lp0989SVIVJp+PeRMlm+nYsMSqPGYXSW0nGG7RQHiXJK2AuRRLxAJ7hEacTpTK7qZTLqHt++0shdXUfOvYhtx8f3Zl7y1Z5AhNSfu2Urnu18Q5KtQ3XO7hV2m5XSbPEbddIrmpon6sqmEKHiPOOLlQl4dl6nOH3a3Tn0+mcG0UddZK8jEidMfYWvAMyHsZ5WZKL+17JW9wfJllUxsS/Ay/n0NENkuMqXcTIPWJB/hBthIXEJiLI3u6aL2WuIBcfH5aRdHRDp3zIH8QZuFNKI2xFi31KI/A7iM4EU6k7YQSJvrJQWM3DRPHs9BnTwrgiaM7IVnFV6YRxZe4ZDRhNt1yar7fi/XqIxwH/NPtMQ3LLXpwwjWXOaKlwx1rMzkQPMqaJypbe5BM5/z25GM5MRTbgeRmsSEGPNyictXjEW8wKU094HdMsogNgQuaP7EvVt5oIkqPqRHiMAp0hPwpUnYo6FbTbVhaHVHBiT3TrUrejI4x4U5tDQIRXObGJsFyFOrGJMDkEg75dRi0F2a1LivxEMs2VzFh1Y0l7C9lINJZFYdc6i8kT22dtuA3p1923P0tu0rgLf9FGvuG+lQKFGr9QZ/HdgZmyN1wGxpefLoeFLTcrWJ+3xzhWK0+/3I55rjbk98LhRGdxEHE86rN8Ax8cRI2YaQgf1qkQVMuu4OL3QnCkfxY+uE9fhSAU/Vn6UJAIGn1354egOPSzuDgBiu0EaUdj8epscKhOr1mcDQHFtPvpz29RSYB+xFdxpRIDP4RXaaUyvP9wO3EqQ/hON9mtUpr1cGeldWopYdNJh5QsCDEvFRIzYvFOtjh6uA/SofKvQOeJt1IOY05CtfQeA++iK4yJUovFm3Sj8x412qce8OmoRhcG/Cb3qmMveD/BrrJYcLKqPrVg26VV437MIfrECpP1OOJ7zfIDeEQzHXveRG+mY88zAY7MIGeXpfpmHDenu2Ms5vnqY9aWjjiL+6wbnXFy8KyE0YYfSaLDyRuRM0l7AsLFtBo6icJZleipIEI1op8K74lckT209j6XhJEnRER0z41mX9FfENzFkujpcEculsx3GRLGQ6EQ2ZskZZrOsqnK2JhBJ4mzLE6GSjNmgniRrso4UGkNG/lxfsyzUCn81vOjdFnMYv7i/wD2IM/PpGA4JAAAAABJRU5ErkJggg==" class="mr-3 h-6 sm:h-9" alt="Boat"/>
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Boats</span>
                <div class="relative collapse ml-20">
                  <button type="button" class="focus:outline-none" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                  <div class="collapse absolute flex flex-col w-40 mt-1 border shadow-lg" id="collapseWidthExample"><div class="collapse" id="collapseWidthExample">{SetSideBar}</div></div>
                </div>
          </a>
            
          <div class="flex md:order-2">
              <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="http://localhost:3000/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="http://localhost:8080/?" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
              <li>
                <a href="http://localhost:4000/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Clients</a>
              </li>
              <li>
                <a href="http://localhost:8001/" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Boats</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
    }
    render(){
        return <h1>{this.SetNav()}</h1>;
    }
}

const SetBackground=()=>{
    return(
        <body className={styles.bg_image}/>
    );
}







export {Nav,SetBackground};
