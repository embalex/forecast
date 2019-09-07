import * as React from 'react';
import { ISun} from '../../../definitions/sun';

const PATH_DOT_DELTA: number = 30;
const DOT_RADIUS: number = 2;
const MOON_RADIUS: number = 5;

const defaultSunSettings: ISun = {
  core: 3,
  beamLength: 3,
  beams: 10,
  coreToBeams: 2,
};

const setCanvasSize = (canvasRefCurrent: HTMLCanvasElement, wrapperRefCurrent: HTMLDivElement): number => {
  const height: number = wrapperRefCurrent.clientHeight;

  canvasRefCurrent.width = height * 2;
  canvasRefCurrent.height = height;

  return height;
};

const getStartAngle = (radius: number): number => Math.asin((DOT_RADIUS + 1) / radius);
const getLastAngle = (radius: number): number => Math.PI - 2 * getStartAngle(radius);

const drawDottedPath = (
  canvasContext: CanvasRenderingContext2D,
  radius: number,
) => {
  const getAngleDelta = (radius: number): number => {
    const halfCircleLength: number = Math.PI * radius;
    const numsOfDots: number = Math.floor(halfCircleLength / PATH_DOT_DELTA);

    return (getLastAngle(radius) - getStartAngle(radius)) / numsOfDots;
  };

  const drawDotAtPath = (
    canvasContext: CanvasRenderingContext2D,
    radius: number,
    angleAtRadian: number,
  ): void => {
    const centerX = radius;
    const centerY = radius;
    const updRadius = radius - DOT_RADIUS - 2;

    const x = centerX - updRadius * Math.cos(angleAtRadian);
    const y = centerY - updRadius * Math.sin(angleAtRadian);

    canvasContext.fillStyle = '#a2a3a8';
    canvasContext.strokeStyle = '#27272c';
    canvasContext.beginPath();
    canvasContext.arc(x, y, DOT_RADIUS, 0, 2 * Math.PI, false);
    canvasContext.fill();
  };

  const dotsAngleArray = [getStartAngle(radius)];
  for(let i = getStartAngle(radius); i < getLastAngle(radius); i += getAngleDelta(radius)) {
    dotsAngleArray.push(i);
  }

  if (dotsAngleArray[dotsAngleArray.length] !== getLastAngle(radius)) {
    dotsAngleArray.push(getLastAngle(radius));
  }

  dotsAngleArray.forEach(angle => drawDotAtPath(canvasContext, radius, angle));
};

const drawMoon = (
  canvasContext: CanvasRenderingContext2D,
  radius: number,
  angle: number,
) => {
  canvasContext.fillStyle = '#a2a3a8';

  const updRadius = radius - MOON_RADIUS - 2 * DOT_RADIUS - 3;
  const x = radius - updRadius * Math.cos(angle);
  const y = radius - updRadius * Math.sin(angle);
  canvasContext.beginPath();
  canvasContext.arc(x, y, MOON_RADIUS, 0, 2 * Math.PI, false);
  canvasContext.fill();
};

const drawSun = (
   canvasContext: CanvasRenderingContext2D,
   radius: number,
   angle: number,
   sunSettings: ISun,
) => {
  canvasContext.fillStyle = '#f38734';
  canvasContext.strokeStyle = '#f38734';

  const updRadius = radius - (sunSettings.core + sunSettings.coreToBeams + sunSettings.beamLength) - 2 * DOT_RADIUS - 3;
  const x = radius - updRadius * Math.cos(angle);
  const y = radius - updRadius * Math.sin(angle);

  canvasContext.beginPath();
  canvasContext.arc(x, y, sunSettings.core, 0, 2 * Math.PI, false);
  canvasContext.fill();

  const sunBeamDAngle = 2 * Math.PI / sunSettings.beams;
  const beamStartRadius = sunSettings.core + sunSettings.coreToBeams + sunSettings.beamLength;
  const beamEndRadius = sunSettings.core + sunSettings.coreToBeams;

  for (let i = 0; i < sunSettings.beams; i++) {
    const angle = i * sunBeamDAngle;
    const beamStartX = x - beamStartRadius * Math.cos(angle);
    const beamStartY = y - beamStartRadius * Math.sin(angle);
    const beamEndX = x - beamEndRadius * Math.cos(angle);
    const beamEndY = y - beamEndRadius * Math.sin(angle);

    canvasContext.moveTo(beamStartX, beamStartY);
    canvasContext.lineTo(beamEndX, beamEndY);
  }

  canvasContext.stroke();
};

export const updateCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  wrapperRef: React.RefObject<HTMLDivElement>,
  isSun?: boolean,
  planetOffset?: number,  // 0 <= position <= 1 from start of dotted path to end
  customSunSettings?: ISun,
) => {
  if (!canvasRef.current || !wrapperRef.current) { return; }
  const sunSettings = customSunSettings ? customSunSettings : defaultSunSettings;

  const canvas = canvasRef.current.getContext('2d');
  if (!canvas) { return; }

  const radius = setCanvasSize(canvasRef.current, wrapperRef.current);

  drawDottedPath(canvas, radius);

  if (planetOffset === undefined) { return; }

  const planetAngle = getStartAngle(radius) + (getLastAngle(radius) - getStartAngle(radius)) * planetOffset;
  if (isSun) {
    drawSun(canvas, radius, planetAngle, sunSettings);
  } else {
    drawMoon(canvas, radius, planetAngle);
  }

}