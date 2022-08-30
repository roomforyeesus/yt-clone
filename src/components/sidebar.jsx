import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

// const selectedCategory = 'New';

const sidebar = ({ selectedCategory, setselectedCategory}) => (
    <Stack
        direction="column"
        sx={{
            overflowY: "auto",
            height: { sx: 'auto', md: '95%'},
            flexDirection: { sx: "row"},
        }}
    >
        {categories.map((category, index) => (
            <button
                className="category-btn"
                onClick={() => setselectedCategory(category.name)}
                style={{ backgroundColor: category.name === selectedCategory && '#FC1503', color: 'white' }}
                key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
            </button>
        ))}
    </Stack>
);

export default sidebar;
