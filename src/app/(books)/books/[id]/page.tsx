import React from "react";
import PDFViwer from "@/components/main/PDFComponents/PDFViwer";
const page = ({ params }: { params: { id: string } }) => {
  const pdfUrl = "https://www.africau.edu/images/default/sample.pdf";

  return (
    <div className="flex flex-col justify-center items-center my-4 ">
      <div className="grid grid-cols-3 ">
        <div className="col-span1 flex flex-col items-center ">
          <div className="rounded-md border-2 w-1/2">
            <img
              src="https://d2qp0siotla746.cloudfront.net/img/use-cases/ebook/template_0.jpg"
              alt="Book-Cover"
              className="p-3"
            />
          </div>
          <div className="text-center mt-4">
            <p>Process of Writing</p>
          </div>
          <div>
            <div className="author">
              ผู้แต่ง:
              <p>ผู้ช่วยศาสตราจารย์อรนุช เอกพงษ์เผ่า</p>
            </div>
            <div className="num-read mt-4">จำนวนผู้อ่าน : 69 คน</div>
          </div>
        </div>
        <div className="col-span-2 mr-4 w-[895px] space-y-3">
          <h2 className="text-3xl font-semibold">รายการหนังสือ</h2>
          <div className="bg-[#D9D9D9] px-5 py-3 rounded-sm breadcrumbs">
            <ul>
              <li>
                <a>หน้าหลัก</a>
              </li>
              <li>
                <a>รายการหนังสือทั้งหมด</a>
              </li>
              <li>รายละเอียดหนังสือ</li>
            </ul>
          </div>
          <PDFViwer url={pdfUrl} />
        </div>
      </div>
    </div>
  );
};

export default page;
