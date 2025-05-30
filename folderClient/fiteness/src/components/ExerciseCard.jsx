import React from 'react';
import './ExerciseCard.css';

const ExerciseCard = ({ exercise, editMode, onUpdate }) => {
  return (
    <div className="exercise-card">
      <div className="exercise-header">
        <h3>{exercise.name}</h3>
        {exercise.Equipment && (
          <span className="equipment-tag">{exercise.Equipment.name}</span>
        )}
      </div>
      
      <div className="exercise-details">
        <div className="exercise-field">
          <label>Sets:</label>
          {editMode ? (
            <input
              type="number"
              min="1"
              max="10"
              value={exercise.sets || 3}
              onChange={(e) => onUpdate('sets', parseInt(e.target.value))}
            />
          ) : (
            <span>{exercise.sets || 3}</span>
          )}
        </div>
        
        <div className="exercise-field">
          <label>Repetitions:</label>
          {editMode ? (
            <input
              type="number"
              min="1"
              max="50"
              value={exercise.repetitions || 12}
              onChange={(e) => onUpdate('repetitions', parseInt(e.target.value))}
            />
          ) : (
            <span>{exercise.repetitions || 12}</span>
          )}
        </div>
      </div>
      
      {exercise.description && (
        <div className="exercise-description">
          <p>{exercise.description}</p>
        </div>
      )}
      
      {/* Updated steps section dengan format numbered list */}
      {exercise.steps && (
        <div className="exercise-steps">
          <h4>Steps:</h4>
          <ol className="steps-list">
            {exercise.steps.split('\n').filter(step => step.trim()).map((step, index) => (
              <li key={index} className="step-item">
                {step.replace(/^\d+\.\s*/, '').trim()}
              </li>
            ))}
          </ol>
        </div>
      )}
      
      {/* YouTube section tetap sama */}
      {exercise.youtubeUrl && (
        <div className="exercise-video">
          <h4>Video Tutorial:</h4>
          <a 
            href={exercise.youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="youtube-link"
          >
            📺 Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;