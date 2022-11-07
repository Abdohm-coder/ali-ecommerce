import { Button, Card, Paper, TextInput } from "@mantine/core";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase/firebase-config";

export default function Pixel() {
  const [pixels, setPixels] = useState([""]);
  const FbPixelDoc = doc(db, "page-info", "facebook-pixel");

  // GET PIXEL DATA
  useEffect(() => {
    getDoc(FbPixelDoc).then((doc) => {
      const items = [];
      items.push(doc.data());
      setPixels(items[0]?.ids);
    });
  }, []);

  const onSubmit = () => {
    const filter = pixels.filter((pixel) => pixel !== "");
    setPixels(filter);
    // POST Facebook Pixel
    updateDoc(FbPixelDoc, {
      ids: filter,
    })
      .then(() => {
        toast.success("مبروك، تم التعديل بنجاح");
      })
      .catch(() => {
        toast.warn("أوبس، حدث خطأ");
      });
  };

  return (
    <div className="grid md:grid-cols-2 ">
      <Card shadow="xs" p="lg" radius={6} className="flex flex-col flex-1">
        <h3 className="text-dark mb-4">فايسبوك بيكسل</h3>
        <div className="flex justify-end">
          <Button
            variant="filled"
            onClick={() => setPixels((pixel) => [...pixel, ""])}
            className="hover:bg-btn-dark bg-btn-dark/90 ml-3">
            إضافة
          </Button>
          <Button
            variant="filled"
            onClick={() =>
              setPixels((pixel) => {
                return pixel.filter((p, i) => i !== pixel.length - 1);
              })
            }
            className="hover:bg-red-500 bg-red-600">
            حذف
          </Button>
        </div>
        <div className="grid place-items-center h-full flex-1 ">
          {pixels.map((pixel, index) => (
            <TextInput
              key={uuidv4()}
              radius={6}
              label="Id"
              mb="sm"
              value={pixel}
              onChange={(e) => {
                const id = e.target.value;
                setPixels((pixel) =>
                  pixel.map((p, i) => (i === index ? id : p))
                );
              }}
              placeholder="أدخل فايسبوك بيكسل Id"
              className="w-full"
            />
          ))}
        </div>
        <Button
          variant="filled"
          onClick={onSubmit}
          className="hover:bg-green-500 bg-green-600">
          حفظ
        </Button>
      </Card>
    </div>
  );
}
