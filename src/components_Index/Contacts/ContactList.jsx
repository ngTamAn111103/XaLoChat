import GroupContact from "./GroupContact"
function ContactList() { 
    
    return ( <>
        {/* Hiển thị Title và Input Search */}

        {/* Hiển thị danh sách liên hệ theo nhóm A-Z */}
        <ul className="p-6">
            <GroupContact letter="A" nameList={[{"name":"Alex"},{"name":"Alison"}]}></GroupContact>    
            <GroupContact letter="B" nameList={[{"name":"Blex"},{"name":"Blison"}]}></GroupContact>    
        </ul>    
    
    </>)
}

export default ContactList