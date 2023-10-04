import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
} from 'reactstrap';
export default function NavBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    return (
        <Nav tabs>
            <NavItem>
                <NavLink href="/" active>
                    WORKINTECH
                </NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    Management
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Employee</DropdownItem>
                    <DropdownItem><NavLink href="/manage/add">Add</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="/manage/update">Update</NavLink></DropdownItem>
                    <DropdownItem><NavLink href="/manage/remove">Remove</NavLink></DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavItem>
                <NavLink href="/employeelist">Employee List</NavLink>
            </NavItem>
        </Nav>
    );
}