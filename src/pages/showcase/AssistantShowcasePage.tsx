import { Box, Chip, Stack, Typography } from "@mui/material";
import { AxiomAssistant } from "@/features/assistant/ui/AxiomAssistant";

export default function AssistantShowcasePage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 88px)",
        p: { xs: 2, md: 4 },
        background:
          "radial-gradient(circle at 12% 10%, rgba(122, 92, 255, 0.16), transparent 42%), radial-gradient(circle at 86% 18%, rgba(70, 194, 255, 0.12), transparent 44%), linear-gradient(160deg, rgba(18, 28, 56, 0.96), rgba(13, 20, 40, 0.96))",
      }}
    >
      <Stack spacing={1} sx={{ maxWidth: 760 }}>
        <Chip
          label="SHOWCASE · АКСИОМ"
          size="small"
          sx={{ width: "fit-content", fontWeight: 700, letterSpacing: "0.06em" }}
        />
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          AI-ассистент для обучения и преподавания
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Плавающий интерфейс ассистента с контекстными действиями, историей диалога и быстрыми
          сценариями для платформы.
        </Typography>
      </Stack>

      <AxiomAssistant
        userId="259d03e3-e93b-4d12-921d-372de691dead"
        role="teacher"
        mode="teacher-dashboard"
      />
    </Box>
  );
}
