import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

import Dashboard from "./components/Dashboard";
import book from "src/assets/book.svg";

const PostCard = () => {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" gap={2}>
          <Box flex={2}>
            <img
              width="160px"
              src="https://batdongsan.com.vn/sellernet/static/media/no-photo.2de8b38e.svg"
              alt="temp-image"
            />
          </Box>

          <Stack flex={6} gap={1}>
            <Box>
              <Typography fontWeight="bold" fontSize="14px" marginBottom={1}>
                <Box
                  component="span"
                  sx={{
                    backgroundColor: "rgb(227, 170, 73)",
                    padding: "4px",
                    borderRadius: "2px",
                    fontSize: "10px",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Chờ duyệt
                </Box>
                test test test test test test test test test test
              </Typography>
              <Typography fontSize="12px">
                Cho thuê căn hộ chung cư • KDC 13D Asia Phú Mỹ, Hồ Chí Minh
              </Typography>
            </Box>

            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography color="rgb(153, 153, 153)" fontSize="12px">
                  Mã tin
                </Typography>
                <Typography fontSize="14px" color="rgb(80, 80, 80)">
                  38401880
                </Typography>
              </Box>
              <Box>
                <Typography color="rgb(153, 153, 153)" fontSize="12px">
                  Ngày đăng
                </Typography>
                <Typography fontSize="14px" color="rgb(80, 80, 80)">
                  25/10/2023
                </Typography>
              </Box>
              <Box>
                <Typography color="rgb(153, 153, 153)" fontSize="12px">
                  Ngày hết hạn
                </Typography>
                <Typography fontSize="14px" color="rgb(80, 80, 80)">
                  04/11/2023
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Box flex={3} textAlign="center">
            <Box maxWidth="150px" margin="auto" marginBottom={1}>
              <img src={book} style={{ margin: "auto" }} />
              <Typography color="rgb(153, 153, 153)" fontSize="12px">
                Tin đăng này chưa có số liệu thống kê
              </Typography>
            </Box>
            <Button variant="contained">Sửa tin</Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

const ListPost = () => {
  return (
    <Dashboard>
      <Container maxWidth="md">
        <Typography
          fontSize="24px"
          color="#2c2c2c"
          fontWeight="bold"
          marginBottom={2}
        >
          Danh sách tin
        </Typography>

        <FormControl required fullWidth>
          <FormLabel>Chọn nhanh địa chỉ</FormLabel>
          <OutlinedInput placeholder="Tìm theo mã tin, tiêu đề" size="small" />
        </FormControl>
      </Container>

      <Box marginBottom={3} marginTop={3}>
        <Divider sx={{ borderColor: "#000" }} />
      </Box>

      <Box backgroundColor="#f9f9f9" padding="40px 0">
        <Container>
          <Stack direction="column" gap={3}>
            {[1, 2, 3, 4].map((item) => (
              <PostCard key={item} />
            ))}
          </Stack>
        </Container>
      </Box>
    </Dashboard>
  );
};

export default ListPost;
