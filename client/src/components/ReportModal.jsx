import { Button, Dialog, Input } from "@mui/material";
import { useState } from "react";

const ReportIssueModal = (props) => {
  const { openReportModal, setOpenReportModal } = props;
  const [issueText, setIssueText] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog
      sx={{ borderRadius: "100px" }}
      open={openReportModal}
      onClose={() => setOpenReportModal(false)}
    >
      <div
        style={{
          backgroundColor: "var(--bg-color)",
          padding: "20px",
          textAlign: "center",
          color: "var(--color)",
          border: "2px solid var(--color)",
        }}
      >
        <p
          style={{
            fontSize: "1.4rem",
            fontWeight: "500",
            color: "var(--color)",
          }}
        >
          Report Issue
        </p>

        <Input
          //   onChange={handleInputChange}
          // value={issueText}
          multiline
          disableUnderline
          placeholder="Write your issue"
          sx={{
            boxSizing: "border-box",
            borderRadius: "4px",
            width: "80%",
            margin: "2rem 1rem 1rem 1rem",
            color: "var(--color)",
            backgroundColor: "white",
            overflow: "auto",
            padding: "12px 6px",
            outline: "1px solid black",
          }}
        />
        <Button>Sumbit</Button>
      </div>
    </Dialog>
  );
};

export default ReportIssueModal;
