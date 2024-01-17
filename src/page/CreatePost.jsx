import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  return (
    <div>CreatePost</div>
  )
}

export default CreatePost