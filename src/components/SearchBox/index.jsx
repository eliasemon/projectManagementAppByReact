import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import findingMatchIdorName from '../../findingMatchIdOrName.js/index';
import Box from '@mui/material/Box';
const SearchBox = ({ keysArray, defualtSelectedArray = [], matchStateLiftingFn }) => {
    const [selectedkeysArray, setSelectedkeysArray] = useState(defualtSelectedArray)
    const [searchValue, setSearchValue] = useState("")
    const [itemShowState, setItemShowState] = useState([])
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    const handleMouseLeave = () => {
        setIsHovering(false);
      };
    useEffect(() => {
        let searchResult;
        if (searchValue.length >= 3) {
            searchResult = findingMatchIdorName(keysArray, searchValue);
            setItemShowState(searchResult);
        }
    }, [searchValue])
    const searchValueChangeHandeler = (e)=>{
        setSearchValue(e.target.value)
    }
    const selectHandeler = (id) =>{
        let flag = selectedkeysArray.find((v) => {
            return (v == id)
        })
        if(!flag){
            setSelectedkeysArray(prev => [...prev, id] )
        }
    }
    matchStateLiftingFn(selectedkeysArray)
    return (
        <>
            <h5>Selected Individuals</h5>
            {selectedkeysArray.map((v)=>{
                let parts = v.split("||");
                return (<Box key= {v} component="span" sx={{mr : 2, p: 1, border: '1px dashed grey' }}>
                    {parts[2]}
              </Box>)
            })}
            <TextField
                margin="dense"
                id="search"
                label="Please enter atleast 3 char to search"
                type="text"
                fullWidth
                variant="standard"
                value={searchValue}
                onChange={searchValueChangeHandeler}
            />
            {
                itemShowState.map(v => (<Typography key = {v} onClick = {()=>selectHandeler(v)}  sx={{cursor : "pointer" , backgroundColor: isHovering ? 'salmon' : '' }} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    {v}
                </Typography>))
            }
        </>
    )

}
export default SearchBox