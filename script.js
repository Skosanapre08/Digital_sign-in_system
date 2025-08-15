document.getElementById("signForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = {
    id: document.getElementById("empId").value,
    name: document.getElementById("empName").value,
    action: document.getElementById("action").value
  };

  const res = await fetch("/cgi-bin/signin.cgi", {
    method: "POST",
    body: new URLSearchParams(data)
  });

  const text = await res.text();
  document.getElementById("responseMsg").textContent = text;
});
