import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Danke = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname.includes("/danke")) {
      setTimeout(() => {
        navigate("/danke", { replace: true });
      }, 100);
    }
  }, [navigate]);

  return (
    <section className="section-padding text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-steel-dark mb-4">
          Vielen Dank für deine Nachricht!
        </h1>
        <p className="text-gray-700">
          Wir haben deine Anfrage erhalten und melden uns so schnell wie
          möglich.
        </p>
      </div>
    </section>
  );
};

export default Danke;
