import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useProfile() {
  const [profile, setProfile] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/profiles?id=${id}`);
        const [profile] = await response.json();

        setProfile(profile);
      } catch (ex) {
        console.error(ex);
      }
    };

    getProfile();
  }, [id]);

  // guard against null profile on first render with empty object
  return profile || {};
}
