import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const PaginationPage = ({onChange}) => {
  return (
    <Stack spacing={2}>
      <Pagination count={2} onChange={onChange}/>
    </Stack>
  );
};
